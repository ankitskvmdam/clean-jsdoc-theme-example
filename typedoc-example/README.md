# clean-jsdoc-theme — TypeDoc example

A standalone example showing how to set up [clean-jsdoc-theme](https://github.com/ankitskvmdam/clean-jsdoc-theme) **v5** with [TypeDoc](https://typedoc.org).

This is a tiny TypeScript library used to exercise the theme's TypeDoc plugin end-to-end. It documents a class (`Circle`), an interface (`Shape`), an enum (`Direction`), type aliases (`Point`, `PointVisitor`), free functions (`distance`, `step`), and a namespace (`Factory`) — covering every kind the plugin's adapter maps. Clone it, install, run the generate script, and you get a fully rendered documentation site under `dist/`.

## How it works

For TypeDoc, clean-jsdoc-theme ships a dedicated output plugin: **`@clean-jsdoc-theme/typedoc`**. Rather than being a CSS theme, it registers as a custom TypeDoc **output** that feeds TypeDoc's reflection tree through the same `setu → dwar` rendering pipeline as the JSDoc bridge. The result is identical to the JSDoc output: server-rendered HTML, co-located `.md` files, lazy-hydrated interactive islands, fuzzy search, and optional Pagefind full-text indexing.

See the theme's [ARCHITECTURE.md](https://github.com/ankitskvmdam/clean-jsdoc-theme/blob/master/docs/ARCHITECTURE.md) for the full design.

## Requirements

1. [Node.js](https://nodejs.org/en/download/) — version 18 or later is recommended.
2. npm or yarn.

## Installation

Install TypeDoc, TypeScript, and the theme's TypeDoc plugin as dev dependencies:

```bash
npm i -D typedoc typescript @clean-jsdoc-theme/typedoc
# or
yarn add -D typedoc typescript @clean-jsdoc-theme/typedoc
```

> This example pins `@clean-jsdoc-theme/typedoc@5.0.0-alpha.1`. See [package.json](./package.json).

## Setup

### 1. `tsconfig.json`

TypeDoc reads your TypeScript program, so a `tsconfig.json` is required. A minimal one is enough:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "rootDir": "src"
  },
  "include": ["src"]
}
```

### 2. `typedoc.json`

This is where the theme is wired in. The two lines that matter are `plugin` (load the plugin) and `outputs` (select it as the renderer):

```json
{
  "$schema": "https://typedoc.org/schema.json",
  "entryPoints": ["src/index.ts"],
  "tsconfig": "tsconfig.json",
  "readme": "README.md",
  "plugin": ["@clean-jsdoc-theme/typedoc"],
  "outputs": [{ "name": "clean-jsdoc-theme", "path": "dist" }],
  "cleanJsdocTheme": {
    "siteName": "typedoc-example",
    "sectionOrder": [
      "Core",
      "Shapes",
      "Modules",
      "Namespaces",
      "Classes",
      "Interfaces",
      "Enums",
      "Typedefs",
      "Globals"
    ],
    "clubSidebarItems": true,
    "copyPage": true
  }
}
```

Key points for the TypeDoc integration:

- **`plugin`** loads `@clean-jsdoc-theme/typedoc`.
- **`outputs`** selects the theme as a custom output (`{ "name": "clean-jsdoc-theme", "path": "dist" }`), which is what replaces TypeDoc's default HTML theme. The `path` is the output directory.
- **Theme options live under the `cleanJsdocTheme` block** — not under TypeDoc's own `theme` option.
- Standard TypeDoc options (`entryPoints`, `tsconfig`, `readme`) work as usual.

### Theme options

The `cleanJsdocTheme` block accepts the same options as the JSDoc bridge, including:

| Option | What it does |
| --- | --- |
| `siteName` | Site title text, or a logo image set (dark/light variants). |
| `fonts` | Heading / body / mono font families (validated against Google Fonts). |
| `sectionOrder` | Pin top-level sidebar groups into a preferred order. |
| `menu` | Define top navigation links. |
| `clubSidebarItems` | Collapse category-less sections into parent/child trees. |
| `copyPage` | Configure the "copy to LLM" split button on content pages. |
| `aiPrompt` | Customize the prompt used by the copy-to-LLM feature. |
| `strict` | Escalate recoverable issues (e.g. missing fonts) to hard failures. |

You can organize API pages into nested sidebar sections by adding `@category` tags to your doc comments — see [`src/geometry.ts`](./src/geometry.ts), where `Point`, `Direction`, etc. are tagged `@category Core`.

For the complete option reference, see the [theme documentation](https://github.com/ankitskvmdam/clean-jsdoc-theme).

## Generate the docs

A `generate-docs` script is already wired up in [package.json](./package.json):

```json
"scripts": {
  "generate-docs": "typedoc",
  "serve": "serve dist -l 3002"
}
```

Run it:

```bash
npm install
npm run generate-docs
```

The rendered site lands in `dist/`.

## Preview the docs

The generated site is static but expects to be served over HTTP (search and the islands won't work from `file://`):

```bash
npm run serve
# serves ./dist at http://localhost:3002
```

## License

Licensed under the MIT license.
