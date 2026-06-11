# clean-jsdoc-theme-example

An example repo showing how to set up [clean-jsdoc-theme](https://github.com/ankitskvmdam/clean-jsdoc-theme) **v5** with JSDoc.

This repo is a working reference — clone it, run the generate script, and you'll get a fully rendered documentation site under `docs/`. Use its `jsdoc.json`, `package.json`, and `src/` as a template for your own project.

## How the theme works

clean-jsdoc-theme v5 turns your JSDoc comments into a modern, static documentation site with server-rendered HTML, lazy-hydrated interactive components ("islands"), and full-text search. Under the hood it runs a small pipeline:

1. **JSDoc** collects doclets from your source.
2. **setu** transforms those doclets into a site manifest (pages, navigation, metadata).
3. **dwar** renders the manifest to HTML/CSS/JS, compiling Tailwind CSS and bundling the islands.
4. **rang** supplies the Preact component library powering search, theme toggle, code tabs, the source viewer, and other interactive chrome.

You don't need to interact with these packages directly — you just point JSDoc at the theme and configure it. For the full design, see the theme's [ARCHITECTURE.md](https://github.com/ankitskvmdam/clean-jsdoc-theme/blob/master/docs/ARCHITECTURE.md).

## Requirements

1. [Node.js](https://nodejs.org/en/download/) — version 18 or later is recommended.
2. npm or yarn.

## Installation

Install JSDoc and the theme as dependencies:

```bash
npm i jsdoc clean-jsdoc-theme
# or
yarn add jsdoc clean-jsdoc-theme
```

> This repo currently pins `clean-jsdoc-theme@5.0.0-alpha.1`. See [package.json](./package.json).

## Setup

Create a JSDoc config file. You can name it anything, but `jsdoc.json` is conventional. A minimal v5 setup looks like this:

```json
{
  "source": {
    // Folder(s) and/or file(s) to document, relative to this config file.
    "include": ["src", "README.md"]
  },
  "templates": {
    "default": {
      // Emit linkable source-code pages.
      "outputSourceFiles": true
      // Add other theme options here, e.g. "siteName", "fonts", "copyPage".
    }
  },
  "plugins": ["plugins/markdown"],
  "opts": {
    "encoding": "utf8",
    "readme": "./README.md",
    // Output folder.
    "destination": "docs/",
    "recurse": true,
    "verbose": true,
    "tutorials": "./tutorials",
    // Point at the theme's built output.
    "template": "./node_modules/clean-jsdoc-theme/dist"
  }
}
```

> See this repo's [`jsdoc.json`](./jsdoc.json) for the exact config used to build the included `docs/`.

A few things to note for v5:

- **`template` points at `/dist`** — `./node_modules/clean-jsdoc-theme/dist`, not the package root.
- **Theme options live under `templates.default`** (not `opts.theme_opts`, which was the v4 location).

### Theme options

Common options you can set under `templates.default`:

| Option | What it does |
| --- | --- |
| `siteName` | Site title text, or a logo image set (dark/light variants). |
| `fonts` | Heading / body / mono font families (validated against Google Fonts). |
| `sectionOrder` | Pin top-level sidebar groups into a preferred order. |
| `clubSidebarItems` | Collapse category-less sections into parent/child trees. |
| `customCss` / `customJs` | Inline or linked custom assets (content-hashed for caching). |
| `copyPage` | Configure the "copy to LLM" split button on content pages. |
| `outputSourceFiles` | Emit linkable highlighted source-code pages. |
| `strict` | Escalate font warnings to hard build failures. |

You can also organize API pages into nested sidebar sections with `@category` tags in your JSDoc comments, and add standalone Markdown/HTML content pages via a `docs` directory with frontmatter (`title`, `group`, `order`, `slug`, `hidden`).

For the complete and up-to-date option reference, see the [theme documentation](https://github.com/ankitskvmdam/clean-jsdoc-theme) and [ARCHITECTURE.md](https://github.com/ankitskvmdam/clean-jsdoc-theme/blob/master/docs/ARCHITECTURE.md). For general JSDoc configuration, see [jsdoc.app](https://jsdoc.app/about-configuring-jsdoc.html).

## Generate docs

Add a generate script to `package.json`:

```json
"scripts": {
  "generate-docs": "jsdoc --configure jsdoc.json --verbose"
}
```

Then run it:

```bash
npm run generate-docs
# or
yarn generate-docs
```

When it finishes, a `docs/` folder is generated containing the full documentation site.

## Preview the docs

The generated site is static but expects to be served over HTTP (search and the islands won't work from `file://`). This repo includes a `serve` script:

```bash
npm run serve
# serves ./docs at http://localhost:3010
```

## Contact

Mail me at: [hello@ankdev.me](mailto:hello@ankdev.me)

## License

Licensed under the MIT license.
