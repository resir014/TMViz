# Contributing Guidelines

Thank you for contributing to TMViz! This document contains everything you need to know to get the project up and running locally for development, as well as what you need to do before submitting a pull request.

## Prerequisites

1. [Node.js](https://nodejs.org/en/) (12.0.0+)
2. [yarn](https://classic.yarnpkg.com/en/) (1.x)

## How to Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new feature branch: `git checkout -b my-new-feature`
3. Install the dependencies: `yarn`
4. Run `yarn dev` to build and watch for code changes
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: git push -u origin my-new-feature
7. Create a [Pull Request](https://help.github.com/articles/creating-a-pull-request)

## Checklist

Before submitting a pull request, make sure the following conditions are met:

- The code has been formatted correctly (run `yarn format` to format your code with Prettier)
- No errors on ESLint (run `yarn lint` to run ESLint)
- No type errors on TypeScript (run `yarn type-check`)

If one or more of the conditions above are not met, the GitHub Actions CI might fail to build your code.

## Project Structure

TMViz is built using [Next.js](https://nextjs.org/). This means that there are some folder conventions enforced by the framework itself (e.g. for [Next.js pages](https://nextjs.org/docs/basic-features/pages)).

Outside of that, we have devised our own project structure as follows:

- `_data` - data which are statically generated on build time, e.g. site metadata, and main menu.
- `_pages` - pages written in Markdown. Every Markdown file inside this folder will be generated with the filename as its slug.
- `public` - Next.js [public assets directory](https://nextjs.org/docs/basic-features/static-file-serving).
- `src` - Contains our source files.
  - `components` - Layout + design-system components (primarily used in Customiser).
  - `modules` - Contains core functionalities, separated by feature.
  - `pages` - Next.js [server-rendered pages](https://nextjs.org/docs/basic-features/pages).
  - `types` - TypeScript types used across multiple feature modules.
  - `utils` - Utility functions used across multiple feature modules.
