# Copilot instructions — los-menos-buscados

Purpose: give AI coding agents immediate, actionable context to make safe edits.

- Quick start
  - Install: `npm install`
  - Dev server: `npm run dev` (Vite + HMR)
  - Build: `npm run build`
  - Preview production build: `npm run preview`
  - Lint: `npm run lint` (ESLint configured in `eslint.config.js`)

- Project entrypoints
  - HTML shell: [index.html](index.html#L1)
  - App entry: [src/main.jsx](src/main.jsx#L1) → mounts `App` from [src/App.jsx](src/App.jsx#L1)

- Architecture & important files
  - Vite + React app with React Compiler enabled in `vite.config.js` (uses `@vitejs/plugin-react` and `reactCompilerPreset`). See [vite.config.js](vite.config.js#L1).
  - Source code lives under [src](src) — use `.jsx` files; package.json uses `type: "module"`.
  - Bundled assets: [src/assets](src/assets) (hero, react.svg, vite.svg).
  - Static public assets: `public/imagenes/` — reference these with absolute paths (e.g. `/imagenes/fondo.jpg`).
  - ESLint: rules in [eslint.config.js](eslint.config.js#L1) target `**/*.{js,jsx}` and include react-hooks + vite refresh rules.

- Project-specific conventions & gotchas
  - Components folder is named `src/Componets` (misspelling). If you rename it to `src/Components`, update imports across the repo.
  - Many components are currently empty (`src/Componets/Login.jsx`, `Registro.jsx`, `ventana.jsx`) — they are placeholders.
  - App imports: `src/App.jsx` currently imports an image from `./punblic/images/fo.png` (typo). Preferred fixes:
    - Use bundled asset: `import hero from './assets/hero.png'`
    - Or use public asset absolute path: `/imagenes/fondo.jpg`
  - Icons: code references `/icons.svg` in the markup; verify this file exists in `public/` before updating references.
  - React version is 19 and React Compiler is enabled — editing `vite.config.js` or Babel presets may affect dev/build performance.

- How to make safe changes (for AI agents)
  - Run `npm run dev` locally after changes to verify HMR and static asset loading.
  - Run `npm run lint` before creating PRs; follow existing ESLint rules.
  - When moving files or renaming folders (e.g., `Componets` → `Components`), update imports and run the dev server to catch ESM resolution errors.
  - Prefer small, focused commits that change one concern (fix path, add component implementation, update import paths).

- Examples (common edits)
  - Fix App image import (bundle):
    ```diff
    - import heroImg from './punblic/images/fo.png'
    + import heroImg from './assets/hero.png'
    ```
  - Use public image absolute URL in JSX: `<img src="/imagenes/fondo.jpg" alt="fondo" />`

- Where to look next
  - Layout/CSS: [src/App.css](src/App.css#L1) and [src/index.css](src/index.css#L1)
  - Empty components: [src/Componets/](src/Componets)
  - Build config: [vite.config.js](vite.config.js#L1) and `package.json` scripts

If anything in these notes is unclear or you want more examples (tests, refactors), tell me what to expand. 
