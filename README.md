# Styling Paradigms

Two React styling exercises in one Vite application:

- **Exercise 1 — Responsive product dashboard:** Tailwind CSS utility classes,
  theme tokens, responsive navigation and product grid, searchable/filterable
  products, status badges, hover/focus/disabled states, and a working add-product
  dialog.
- **Exercise 2 — Type-safe component library:** Vanilla Extract `Button`, `Card`,
  and `Badge` components with typed variants, shared theme contracts, and CSS
  generated during the build.

Use the exercise switch at the top of the page to view either implementation.
Dashboard product cards and page layout are composed with Tailwind utilities;
Vanilla Extract styles are kept in `.css.ts` files and compiled to static CSS.

## Run locally

```sh
npm install
npm run dev
```

Open the Vite URL printed in the terminal. Check the production build with:

```sh
npm run build
npm run lint
```

## Verify responsiveness

The dashboard product grid uses `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
Resize the browser to see one, two, and three columns, respectively. The desktop
sidebar collapses to a horizontal mobile navigation. Focus controls with Tab,
hover action buttons, and inspect the disabled out-of-stock action.

## Project layout

```text
src/
  exercise-2/
    components.tsx
    componentStyles.css.ts
    theme.css.ts
  App.tsx
  index.css
```
