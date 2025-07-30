# Multi-Theme Switcher (React + TypeScript)

A production-ready assignment app with **three distinct themes** (layout + fonts + spacing + colors), theme persistence, API data, routing, and responsive design.

##  Features
- 3 themes with **structural differences**:
  - **Theme 1**: Minimal, light, sans-serif, top header layout
  - **Theme 2**: Dark mode + **sidebar** layout, serif font
  - **Theme 3**: **Colorful card-grid** layout, playful Pacifico font
- Fixed header with logo + **theme dropdown** (Theme1 default)
- **Context API** for theme management
- **localStorage** persistence across reloads
- Pages: **Home / About / Contact** (React Router)
- **FakeStore API** products rendered as cards
- **styled-components** (no big UI libraries)
- Subtle cross-fade **animation** on theme switch
- Fully **responsive** (desktop & mobile)
- **TypeScript** strict mode
- Basic security hardening (CSP, no dangerouslySetInnerHTML, abort fetch)

##  Quick Start
```bash
npm i
npm run dev
```

Build & preview:
```bash
npm run build && npm run preview
```

##  Security Notes
- No `dangerouslySetInnerHTML` anywhere.
- Content-Security-Policy in `index.html` restricts sources.
- External anchor links use `rel="noopener noreferrer"`.
- `AbortController` avoids hanging fetches.
- Only a theme key is stored in `localStorage`.

##  Manual Test Checklist
- Theme 1 loads by default.
- Switch to Theme 2 (dark + sidebar) and Theme 3 (colorful cards).
- Refresh → selected theme persists.
- Home shows loading → products → cards (with lazy images).
- Resize window → grid becomes 2-col / 1-col on smaller screens.
- Navigate to About / Contact → theme applies globally.
```
