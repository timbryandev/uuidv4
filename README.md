# @timbryandev/uuidv4

Generate UUIDs to V4 spec

[![License](https://img.shields.io/github/license/timbryandev/uuidv4)](https://img.shields.io/github/license/timbryandev/uuidv4)

- [NPM](https://www.npmjs.com/package/@timbryandev/uuidv4) [![npm version](https://img.shields.io/npm/v/@timbryandev/uuidv4)](https://img.shields.io/npm/v/@timbryandev/uuidv4)
- [GitHub](https://github.com/timbryandev/uuidv4) [![GitHub version](https://img.shields.io/github/package-json/v/timbryandev/uuidv4)](https://img.shields.io/github/package-json/v/timbryandev/uuidv4)

## Makes use of

- [![Jest](https://img.shields.io/github/package-json/dependency-version/timbryandev/uuidv4/dev/jest/production)](https://jestjs.io/) for unit testing
- [![Standard](https://img.shields.io/github/package-json/dependency-version/timbryandev/uuidv4/dev/standard/production)](https://standardjs.com/) for code standards and linting
- [![Terser](https://img.shields.io/github/package-json/dependency-version/timbryandev/uuidv4/dev/terser/production)](https://terser.org/) for production build (minification, uglification, obfuscation ect)

## Prerequisites

- [NPM](https://docs.npmjs.com/cli)
- [Node.js](https://nodejs.org/en/)

## Usage

1. Run `npm install @timbryandev/uuidv4` to add this package to your project
2. Import uuidV4 into your project: `import uuidV4 from "@timbryandev/uuidv4"`

- To get a single id, use:

```javascript
const [id] = uuidV4() // [ '85e63d29-f36a-4780-aa8d-e5cb2e8d1ebd' ]
```

- To get many ids, pass a quantity:

```javascript
const ids = uuidV4(3) // ['3d848fe6-b692-4257-bcfd-ccd27370bd7e','52ac630a-87c8-4767-879a-6b5881af045f','dca27384-5a61-4899-b4a6-f82bf8d728ca']
```

## Development

- `git clone https://github.com/timbryandev/uuidv4.git`
- `npm install`
- `npm run tdd` should be all you need. It'll launch jest in watch mode and will run existing and new tests against the codebase as you make any modifications or additions.

## Deploy

Run `npm version <update_type>` first to upgrade the package version number - where `update_type` is one of `major`, `minor` or `patch`.

Run `npm run publish` which runs the build command producing minified production JS. It then publishes the package to <https://npmjs.com/~timbryandev> as a scoped package with public visibility.
