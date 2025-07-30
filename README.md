# Multi-Theme Switcher (React + TypeScript)

**Live Demo:** https://swathi-v-react-frontend-hipster-inc.vercel.app  
**Repo:** https://github.com/swathisiva1519/SwathiV-ReactFrontend-HipsterInc

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
- **styled-components** (no large UI libraries)
- Subtle cross-fade **animation** on theme switch
- Fully **responsive** (desktop & mobile)
- **TypeScript** (strict mode)
- Basic security hardening (CSP, no `dangerouslySetInnerHTML`, `AbortController`)

##  Quick Start
```bash
npm i
npm run dev
