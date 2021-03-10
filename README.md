# fp-ts-library-template

Opinionated starter template for libraries in the [fp-ts](https://github.com/gcanti/fp-ts) eco system.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->

- [Docs](#docs)
- [Features](#features)
- [Planned](#planned)
<!-- AUTO-GENERATED-CONTENT:END -->

# Docs

[API Docs](https://no-day.github.io/fp-ts-library-template)

# Features

- Testing

  - Jest tests via [ts-test](https://github.com/kulshekhar/ts-jest)
  - Property based testing via [Fast check](https://github.com/dubzzz/fast-check)

- Documentation

  - JS Doc formatting via [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
  - Table of Content generation via [Markdown magic](https://github.com/DavidWells/markdown-magic)

- Distribution

  - `.d.ts` files
  - JavaScript files

- CI via GitHub Actions
  - build & test
  - generate docs and deploy to GitHub pages.
  - publish to NPM on release

# Planned

- Expose multiple modules
- Use markdown-magic to insert code from the examples folder to the README

# Recepies

## Getting started

```bash
git clone https://github.com/no-day/fp-ts-library-template
mv fp-ts-library-template your-lib-name
cd your-lib-name
```

Replace `fp-ts-library-template` with `your-lib-name` in those files:

- `src/index.ts`
- `package.json`

## Build distribution files

```bash
yarn build
```

## Run test suite

```bash
yarn test
```

## Generate Docs

```bash
yarn docs
```

## Enhance README with auto generations

```bash
yarn md-magic
```

## Make docs available online via GitHub pages

- Push to your remote repo at GitHub (triggers CI)
- In the GitHub UI of your repo, go to "Settings" > "GitHub Pages"
- Select `gh-pages` branch as source, keep the "root" directory and "Save"

## Publish to NPM

Only once:

- In the GitHub UI add `NPM_TOKEN` from you NPM account as a secret ("Settings" / "Secrets")

On every release:

- Increase the version in the `package.json` e.g. to "1.0.1"
- Commit as `v1.0.1`
- In the GitHub UI, go to the "releases" section of your repo.
- Select "Create a new release"
- Use `v1.0.1` as "Tag version" and "Release title"
- Click "Publish release"
- Check the "Actions" tab to see if CI runs properly
