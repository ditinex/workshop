# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite HMR)
npm run build        # Production build
npm run preview      # Preview production build

npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format src/ with Prettier
npm run format:check # Check formatting without writing
```

## Naming Conventions

| Thing | Convention |
|---|---|
| Functions | `camelCase` |
| Variables | `snake_case` |
| API calls | `TitleCase` |
| `useState` | `value` / `setValue` |
| Constants / special vars | `CAPITAL_LETTER` |
| Components | `TitleCase` |

Always use arrow functions: `const fn = () => {}` — never `function fn() {}`.

## Code Structure

Every page file must have a JSDoc header:

```js
/**
 * @version 0.0.1
 * Updated On : <date>
 * <Description of the page/component>
 */
```

Organize component internals in this order with section comments:

```js
//-------------- State & Variables --------------//

//-------------- Use Effects --------------//

//-------------- Other Methods --------------//
```

- Global styles go in `global.css`; module-scoped styles in `moduleName.css` with a wrapping container class to prevent leakage.
- Break large page UIs into smaller components. Non-reusable components live in a `components/` folder co-located with the page.

## Architecture

**Routing** — `src/navigation/index.jsx` is the app entry point rendered by `main.jsx`. It owns the `BrowserRouter` and all `<Route>` definitions. Adding a new route means registering it here.

**Pages** — `src/pages/` holds full-page components. All pages are re-exported through `src/pages/index.js` (barrel file), so navigation imports from `../pages/index.js`, not individual files.

**Components** — `src/components/` is for shared/reusable components (currently empty).

**Root component** — `src/App.jsx` is the original Vite template component, mounted at `/`.

## Dependencies to use

- **Icons** — use `lucide-react` for all icons
- **Toasts** — use `react-hot-toast` for all toast/notification messages
- **Styling** — use Tailwind utility classes for all component styles

## Git workflow

Branch off `dev` using your name, PR into `staging` for review, then merge `staging` → `main` for production.

## Tooling notes

- **React Compiler** is enabled via `babel-plugin-react-compiler` — avoid manual `useMemo`/`useCallback` optimizations the compiler handles automatically.
- **Tailwind CSS v4** is integrated via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed).
- **ESLint + Prettier** are integrated together: `eslint-plugin-prettier` surfaces format issues as ESLint warnings. Run `lint:fix` + `format` together to fully clean a file.
- `no-unused-vars` is set to error but ignores `^[A-Z_]` pattern (uppercase constants/components are safe to declare unused).
