# clean-jsdoc-theme-example

Working examples of [**clean-jsdoc-theme**](https://github.com/ankitskvmdam/clean-jsdoc-theme) v5 — a modern documentation theme that produces static sites with server-rendered HTML, lazy-hydrated interactive islands, and fuzzy/full-text search.

The theme works with **both JSDoc and TypeDoc**, so this repo has one self-contained example for each. Each example is its own npm project: clone the repo, `cd` into the example you want, install, and run its generate script.

## Examples

| Example | Documents | Tooling |
| --- | --- | --- |
| [`jsdoc-example/`](./jsdoc-example) | JavaScript with JSDoc comments | [JSDoc](https://jsdoc.app) + `clean-jsdoc-theme` |
| [`typedoc-example/`](./typedoc-example) | TypeScript | [TypeDoc](https://typedoc.org) + `@clean-jsdoc-theme/typedoc` |

Both produce the same kind of output — the only difference is the doc generator and how the theme is wired into it. See each example's README for full setup and configuration instructions.

## Quick start

```bash
# JSDoc
cd jsdoc-example
npm install
npm run generate-docs   # output → docs/
npm run serve           # preview at http://localhost:3010

# TypeDoc
cd typedoc-example
npm install
npm run generate-docs   # output → dist/
npm run serve           # preview at http://localhost:3002
```

## Learn more

- Theme repository: <https://github.com/ankitskvmdam/clean-jsdoc-theme>
- Architecture & design: [ARCHITECTURE.md](https://github.com/ankitskvmdam/clean-jsdoc-theme/blob/master/docs/ARCHITECTURE.md)

## Contact

Mail me at: [hello@ankdev.me](mailto:hello@ankdev.me)

## License

Licensed under the MIT license.
