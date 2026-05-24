# Good Day School — LMS Web UI Kit

## Purpose
High-fidelity recreation of the LMS web portal for Admin and Teacher roles. Click-through prototype showing core screens.

## Design Width
1280px desktop. Sidebar 260px fixed, content area fluid.

## Screens Included (index.html)
1. **Login** — admin/teacher login with school branding
2. **Teacher Dashboard** — class snapshot, today's attendance, pending notes
3. **Attendance** — full-class grid with photo, tap-to-mark UI
4. **Daily Notes** — per-child note entry with AI assist
5. **Student Profile** — full student record view

## Components
- `Sidebar.jsx` — LMS navigation sidebar
- `TopBar.jsx` — Page header with search and user menu
- `AttendanceGrid.jsx` — Photo grid attendance UI
- `StudentCard.jsx` — Student profile card
- `NoteCard.jsx` — Daily note card
- `DataTable.jsx` — Shared table component

## Design System
Uses `../../colors_and_type.css` for all tokens.
Fonts: Cormorant Garamond (headings), Lora (body), DM Sans (UI).
