---
name: CV Editor Design System
version: 1.0.0
colors:
  primary: "#1b4332"
  primary-hover: "#2d6a4f"
  background: "#f0f2f5"
  surface: "#ffffff"
  text-main: "#000000"
  text-muted: "#333333"
  text-light: "#111111"
  divider: "#888888"
  accent-yellow: "#ffc107"
  accent-red: "#c94a29"
  accent-grey: "#6c757d"
typography:
  display:
    fontFamily: "Be Vietnam Pro"
    fontWeight: 700
  body:
    fontFamily: "Be Vietnam Pro"
    fontWeight: 400
spacing:
  base: "10.5pt"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "20px"
rounded:
  sm: "4px"
  md: "10px"
  lg: "16px"
  full: "50px"
---

# CV Editor Design System

## Overview
This design system defines the visual guidelines for the CV Editor project. The CV page conforms to standard A4 printing sizes and uses a clean, high-contrast typography style suited for professional resumes.

## Colors
- **Primary Color (`#1b4332`)**: Used for header icons, links, and major calls to action.
- **Background (`#f0f2f5`)**: Soft grey page background to contrast the CV sheet.
- **Surface (`#ffffff`)**: White A4 canvas sheet.
- **Main Text (`#000000`)**: Dark text for optimal readability in print.

## Typography
- We use the font family **Be Vietnam Pro** exclusively, falling back to Arial/Helvetica if necessary.
- Font sizes are defined dynamically based on the base font size (`10.5pt`).

## Layout & Printing
- The preview matches the standard A4 dimension (`210mm` x `297mm`).
- Section titles should have a border-bottom of `1.5px solid #000000` to separate sections clearly.
