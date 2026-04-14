Create a new React page in this project.

## Steps

1. Ask the user for the page name if not already provided (TitleCase, e.g. `UserProfile`).

2. Create the file at `src/pages/<PageName>.jsx` using this exact template — replace every occurrence of `HelloWorld` / `Hello, World!` with the new page name:

```jsx
/**
 * @version 0.0.1
 * Updated On : <today's date as Month DD, YYYY>
 * <One-line description of what this page does>
 */

const <PageName> = () => {
  //-------------- State & Variables --------------//

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100 px-4 dark:from-gray-900 dark:to-violet-950'>
      <div className='w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-violet-100 dark:bg-gray-800 dark:ring-violet-900'>
        <div className='mb-6 flex justify-center'>
          <span className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-3xl dark:bg-violet-900'>
            👋
          </span>
        </div>
        <h1 className='mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
          <Page Title>
        </h1>
        <p className='text-base text-gray-500 dark:text-gray-400'>
          Welcome to your first page. Built with React & Tailwind CSS.
        </p>
        <div className='mt-8 flex justify-center gap-3'>
          <span className='rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300'>
            React
          </span>
          <span className='rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300'>
            Tailwind
          </span>
          <span className='rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300'>
            Vite
          </span>
        </div>
      </div>
    </div>
  )
}

export default <PageName>
```

- `<PageName>` → TitleCase component name (e.g. `UserProfile`)
- `<Page Title>` → Human-readable spaced title (e.g. `User Profile`)

3. Add the export to `src/pages/index.js`:
   - Append: `export { default as <PageName> } from './<PageName>.jsx'`

4. Register a route in `src/navigation/index.jsx`:
   - Import `<PageName>` from `'../pages/index.js'`
   - Add `<Route path='/<kebab-case-route>' element={<<PageName> />} />`

## Rules to follow (from CODE_OF_CONDUCT.md)

- Component name → TitleCase
- Use `const Fn = () => {}` — never `function Fn() {}`
- Always include the JSDoc header block
- Always include the three section comment blocks
- All styling via Tailwind classes — no inline styles
