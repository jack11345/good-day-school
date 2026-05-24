# Good Day School — Parent Mobile App UI Kit

## Purpose
High-fidelity recreation of the Parent Mobile App (PWA, 360px wide). Click-through prototype showing core parent screens.

## Design Width
360px mobile (iPhone SE / common Android). Full-viewport height.

## Screens Included (index.html)
1. **Login** — phone OTP login with bilingual toggle
2. **Home Dashboard** — child cards, today's summary, fee balance
3. **Child Detail** — attendance, daily note, homework feed
4. **Fee Payment** — invoice view, payment gateway selection
5. **Messages** — teacher thread, WhatsApp handoff

## Components
- `MobileShell.jsx` — Phone frame + status bar
- `BottomNav.jsx` — 5-tab bottom navigation
- `ChildCard.jsx` — Child summary card
- `FeeCard.jsx` — Invoice/payment card
- `MessageThread.jsx` — Chat-style message thread

## Design System
Uses `../../colors_and_type.css` for all tokens.
Mobile-first: 44px minimum tap targets, generous padding.
