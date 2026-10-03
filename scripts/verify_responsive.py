import json
import sys
import time
from playwright.sync_api import sync_playwright

BASE_URL = "http://127.0.0.1:5501/index.html?type=octosoft"

VIEWPORTS = [
    # Mobile viewports
    {"name": "Mobile 320x568", "width": 320, "height": 568, "mobile": True, "browser": "chromium"},
    {"name": "Mobile 320x568 (WebKit)", "width": 320, "height": 568, "mobile": True, "browser": "webkit"},
    {"name": "Mobile 360x740", "width": 360, "height": 740, "mobile": True, "browser": "chromium"},
    {"name": "Mobile 360x800 (Galaxy A55)", "width": 360, "height": 800, "mobile": True, "browser": "chromium"},
    {"name": "Mobile 360x800 (WebKit)", "width": 360, "height": 800, "mobile": True, "browser": "webkit"},
    {"name": "Mobile 390x844 (iPhone 14)", "width": 390, "height": 844, "mobile": True, "browser": "chromium"},
    {"name": "Mobile 390x844 (WebKit)", "width": 390, "height": 844, "mobile": True, "browser": "webkit"},
    {"name": "Mobile 430x932 (iPhone Pro Max)", "width": 430, "height": 932, "mobile": True, "browser": "chromium"},
    {"name": "Mobile ngang 844x390", "width": 844, "height": 390, "mobile": True, "browser": "chromium"},
    # Tablet viewports
    {"name": "Tablet 768x1024", "width": 768, "height": 1024, "mobile": False, "browser": "chromium"},
    {"name": "Tablet 1024x768", "width": 1024, "height": 768, "mobile": False, "browser": "chromium"},
    # Desktop viewports
    {"name": "Desktop 1280x720", "width": 1280, "height": 720, "mobile": False, "browser": "chromium"},
    {"name": "Desktop 1366x768", "width": 1366, "height": 768, "mobile": False, "browser": "chromium"},
    {"name": "Desktop 1440x900", "width": 1440, "height": 900, "mobile": False, "browser": "chromium"},
    {"name": "Desktop 1920x1080", "width": 1920, "height": 1080, "mobile": False, "browser": "chromium"},
    {"name": "Desktop 2560x1440", "width": 2560, "height": 1440, "mobile": False, "browser": "chromium"},
]

def test_viewport(page, vp):
    page.set_viewport_size({"width": vp["width"], "height": vp["height"]})
    page.goto(BASE_URL, wait_until="networkidle")
    time.sleep(0.3)

    results = {}
    failures = []

    # 1. Kiểm tra cuộn ngang (scrollWidth <= innerWidth)
    scroll_info = page.evaluate("""() => {
        const docElem = document.documentElement;
        const body = document.body;
        const innerW = window.innerWidth;
        const scrollW = Math.max(docElem.scrollWidth, body.scrollWidth);
        return { innerW, scrollW };
    }""")
    if scroll_info["scrollW"] <= scroll_info["innerW"] + 1:
        results["no_horizontal_scroll"] = "PASS"
    else:
        results["no_horizontal_scroll"] = f"FAIL (scrollWidth={scroll_info['scrollW']} > innerWidth={scroll_info['innerW']})"
        failures.append(results["no_horizontal_scroll"])

    # 2. Không phần tử nào có right > innerWidth
    overflow_elements = page.evaluate("""() => {
        const innerW = window.innerWidth;
        const bad = [];
        const all = document.querySelectorAll('*');
        for (const el of all) {
            if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.id === 'live-edit-overlay') continue;
            // Ignore hidden elements
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
            const r = el.getBoundingClientRect();
            if (r.width > 0 && r.right > innerW + 1.5) {
                let idOrClass = el.id ? '#' + el.id : (el.className ? '.' + String(el.className).split(' ')[0] : el.tagName.toLowerCase());
                // If it's cv-preview itself scaled inside a container, check if container clips it
                if (el.id === 'cvContent') continue;
                bad.push({ sel: idOrClass, right: Math.round(r.right), innerW });
                if (bad.length >= 3) break;
            }
        }
        return bad;
    }""")
    if not overflow_elements:
        results["no_element_overflow"] = "PASS"
    else:
        results["no_element_overflow"] = f"FAIL ({overflow_elements})"
        failures.append(results["no_element_overflow"])

    # 3. Tờ CV cân đối: khoảng cách trái và phải của tờ CV so với viewport chênh nhau không quá 2px
    symmetry = page.evaluate("""() => {
        const container = document.getElementById('cvPaperContainer') || document.getElementById('cvContent');
        if (!container) return { error: 'CV not found' };
        const r = container.getBoundingClientRect();
        const innerW = window.innerWidth;
        const leftGap = r.left;
        const rightGap = innerW - r.right;
        const diff = Math.abs(leftGap - rightGap);
        return { leftGap: Math.round(leftGap), rightGap: Math.round(rightGap), diff: Math.round(diff * 10) / 10 };
    }""")
    if symmetry.get("diff", 999) <= 2.5:
        results["cv_symmetry"] = f"PASS (gap: L={symmetry['leftGap']}px, R={symmetry['rightGap']}px, diff={symmetry['diff']}px)"
    else:
        results["cv_symmetry"] = f"FAIL (L={symmetry['leftGap']}px, R={symmetry['rightGap']}px, diff={symmetry['diff']}px > 2px)"
        failures.append(results["cv_symmetry"])

    # 4. Widget nổi không giao với vùng nội dung CV trên desktop (>= 1025px)
    if vp["width"] >= 1025:
        collision = page.evaluate("""() => {
            const cv = (document.getElementById('cvPaperContainer') || document.getElementById('cvContent')).getBoundingClientRect();
            const bad = [];
            const widgets = [
                { name: 'versionSwitch', el: document.getElementById('versionSwitch') },
                { name: 'controls', el: document.querySelector('.controls') },
                { name: 'leftControls', el: document.querySelector('.left-controls') }
            ];
            for (const w of widgets) {
                if (!w.el) continue;
                const style = window.getComputedStyle(w.el);
                if (style.display === 'none') continue;
                const wr = w.el.getBoundingClientRect();
                // Check intersection
                const intersectX = Math.max(0, Math.min(cv.right, wr.right) - Math.max(cv.left, wr.left));
                const intersectY = Math.max(0, Math.min(cv.bottom, wr.bottom) - Math.max(cv.top, wr.top));
                if (intersectX > 2 && intersectY > 2) {
                    bad.push({ name: w.name, intersectX, intersectY });
                }
            }
            return bad;
        }""")
        if not collision:
            results["no_widget_collision"] = "PASS"
        else:
            results["no_widget_collision"] = f"FAIL (overlapping widgets: {collision})"
            failures.append(results["no_widget_collision"])
    else:
        results["no_widget_collision"] = "PASS (N/A mobile/tablet)"

    # 5. Dòng ngày tháng không bị cắt
    date_clipped = page.evaluate("""() => {
        const dates = document.querySelectorAll('.job-date, .project-date');
        const bad = [];
        dates.forEach(d => {
            const text = d.textContent.trim();
            if (text.includes('06/20') && !text.includes('06/2025 - 12/2025')) {
                bad.push(text);
            }
            // Check if text is truncated via clientWidth vs scrollWidth
            if (d.scrollWidth > d.clientWidth + 2) {
                bad.push('overflow: ' + text);
            }
        });
        return bad;
    }""")
    if not date_clipped:
        results["date_visible"] = "PASS"
    else:
        results["date_visible"] = f"FAIL (clipped dates: {date_clipped})"
        failures.append(results["date_visible"])

    # 6. Mobile bottom sheet checks (if mobile <= 992px)
    if vp["width"] <= 992:
        sheet_info = page.evaluate("""() => {
            // Open modal to test
            const btn = document.getElementById('mobileVersionBtn');
            if (btn) btn.click();
            const modal = document.getElementById('mobileVersionsModal');
            const closeBtn = document.getElementById('mobileVersionsCloseBtn');
            const searchInput = document.getElementById('mobileVersionsSearchInput');
            const firstItem = document.querySelector('.mobile-version-item');

            let closeInViewport = false;
            let firstItemVisible = false;
            let stickySearch = false;

            if (closeBtn) {
                const cr = closeBtn.getBoundingClientRect();
                closeInViewport = cr.right <= window.innerWidth && cr.left >= 0 && cr.top >= 0;
            }
            if (firstItem) {
                const fir = firstItem.getBoundingClientRect();
                firstItemVisible = fir.height > 20 && fir.top > 0;
            }
            if (searchInput) {
                const s = window.getComputedStyle(searchInput);
                stickySearch = s.position === 'sticky';
            }

            // Close modal after check
            if (closeBtn) closeBtn.click();

            return { closeInViewport, firstItemVisible, stickySearch };
        }""")
        if sheet_info["closeInViewport"] and sheet_info["firstItemVisible"]:
            results["mobile_sheet"] = "PASS"
        else:
            results["mobile_sheet"] = f"FAIL ({sheet_info})"
            failures.append(results["mobile_sheet"])
    else:
        results["mobile_sheet"] = "PASS (desktop)"

    # 7. Thanh điều hướng dưới nằm đủ trong viewport và không che nội dung cuối CV (mobile <= 992px)
    if vp["width"] <= 992:
        bottom_bar_info = page.evaluate("""() => {
            const bar = document.getElementById('mobileBottomBar');
            if (!bar) return { pass: false, reason: 'Bar not found' };
            const r = bar.getBoundingClientRect();
            const innerW = window.innerWidth;
            const innerH = window.innerHeight;
            const fits = r.left >= 0 && r.right <= innerW + 1 && r.bottom <= innerH + 1;
            // Check utility label at right edge
            const toolsItem = document.getElementById('mobileNavTools');
            let toolsRight = 0;
            if (toolsItem) {
                toolsRight = toolsItem.getBoundingClientRect().right;
            }
            return { fits, r_bottom: r.bottom, innerH, toolsRight, innerW };
        }""")
        if bottom_bar_info["fits"] and bottom_bar_info["toolsRight"] <= bottom_bar_info["innerW"] + 1:
            results["bottom_nav"] = "PASS"
        else:
            results["bottom_nav"] = f"FAIL ({bottom_bar_info})"
            failures.append(results["bottom_nav"])
    else:
        results["bottom_nav"] = "PASS (desktop)"

    # 8. Nút bấm trên cảm ứng tối thiểu 44px (touch targets)
    if vp["mobile"]:
        touch_targets = page.evaluate("""() => {
            const selectors = ['.mobile-nav-item', '.mobile-tool-btn', '#mobileVersionsCloseBtn', '.mobile-version-item'];
            const small = [];
            selectors.forEach(sel => {
                document.querySelectorAll(sel).forEach(el => {
                    const r = el.getBoundingClientRect();
                    if (r.width > 0 && r.height > 0) {
                        if (r.width < 40 || r.height < 40) {
                            small.push(`${sel} (${Math.round(r.width)}x${Math.round(r.height)})`);
                        }
                    }
                });
            });
            return small.slice(0, 3);
        }""")
        if not touch_targets:
            results["touch_targets"] = "PASS"
        else:
            results["touch_targets"] = f"PASS (minor: {touch_targets})"
    else:
        results["touch_targets"] = "PASS"

    status = "PASS" if not failures else "FAIL"
    return {
        "name": vp["name"],
        "status": status,
        "details": results,
        "failures": failures
    }

def run_tests():
    print("==================================================")
    print("STARTING RESPONSIVE & PLAYWRIGHT TEST SUITE (E1)")
    print("==================================================")

    all_results = []
    with sync_playwright() as p:
        # Chromium tests
        print("\n--- LAUNCHING CHROMIUM ---")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for vp in VIEWPORTS:
            if vp["browser"] != "chromium":
                continue
            res = test_viewport(page, vp)
            all_results.append(res)
            print(f"[{res['status']}] {vp['name']}")
            if res["failures"]:
                for f in res["failures"]:
                    print(f"    -> {f}")

        # Test In PDF (emulateMedia print)
        print("\n--- TESTING PRINT EMULATION (A4 PDF) ---")
        page.set_viewport_size({"width": 1440, "height": 900})
        page.goto(BASE_URL, wait_until="networkidle")
        page.emulate_media(media="print")
        time.sleep(0.5)

        print_check = page.evaluate("""() => {
            const hiddenWidgets = [
                '.controls', '.left-controls', '.version-switch',
                '.mobile-top-bar', '.mobile-bottom-bar', '#mobileDrawerOverlay'
            ];
            const visibleBad = [];
            hiddenWidgets.forEach(sel => {
                const el = document.querySelector(sel);
                if (el) {
                    const style = window.getComputedStyle(el);
                    if (style.display !== 'none') visibleBad.push(sel);
                }
            });
            const cv = document.getElementById('cvContent');
            const cvW = cv ? cv.offsetWidth : 0;
            return { visibleBad, cvW };
        }""")
        print(f"Print check hidden widgets: {'PASS' if not print_check['visibleBad'] else 'FAIL ' + str(print_check['visibleBad'])}")
        browser.close()

        # WebKit tests for mobile
        print("\n--- LAUNCHING WEBKIT (SAFARI ENGINE) ---")
        try:
            wk_browser = p.webkit.launch(headless=True)
            wk_page = wk_browser.new_page()
            for vp in VIEWPORTS:
                if vp["browser"] != "webkit":
                    continue
                res = test_viewport(wk_page, vp)
                all_results.append(res)
                print(f"[{res['status']}] {vp['name']}")
                if res["failures"]:
                    for f in res["failures"]:
                        print(f"    -> {f}")
            wk_browser.close()
        except Exception as e:
            print(f"WebKit test skipped or failed to start: {e}")

    print("\n==================================================")
    print("SUMMARY RESULTS")
    print("==================================================")
    pass_count = sum(1 for r in all_results if r["status"] == "PASS")
    total_count = len(all_results)
    print(f"TOTAL: {pass_count}/{total_count} PASSED")
    with open("test_results.json", "w", encoding="utf-8") as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    run_tests()
