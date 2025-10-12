![Original layout overview](https://github.com/luccaromaniello/cometa-code-challenge/blob/769a0fa963a66fed99e29f997b22f058b161fc6d/instructions/original-layout.png)

# Cometa Code - Frontend Challenge

## Instructions

- Recreate the provided design layout (`instructions/original-layout.png` in the repository).
- Use Vue.js 3
- Use components
- Implement lifecycle hooks from Vue

## Features

- Replicated the interface using Vue.js
- Implemented a responsive design
- Added interactivity (job search by name and category filter)

## Considerations

- It wasn’t specified whether CSS preprocessors or libraries could be used. In my interpretation, this was open, so I chose Tailwind CSS for styling.

- The Figma file lacked standardization in some styles, especially gradients and button components. To avoid inconsistencies, I opted to standardize a few elements. Since the instructions left room for interpretation, I believe this approach aligns with the challenge's intent.

- Future improvements:
  - Add negotiations feature
  - Improve mobile experience and responsiveness
  - Standardize button components
  - Define and implement experience for ultrawide monitors

## AI Usage

- Mostly used for code completion and suggestions. I've also used to create boilerplate code for components and pages, and to generate commonly used code snippets, such as date formatting.

## 🧞 Commands

All commands should be run from the root of the project in a terminal. I'm using `Bun`, but you can also use any JavaScript runtime like npm, Yarn, etc.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

### NPM

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
