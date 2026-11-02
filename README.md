# christiangh.github.io

Personal portfolio of Christian García Herreras, senior frontend developer.

**Live:** https://christiangh.github.io

## Stack

- [Astro](https://astro.build) (static output)
- TypeScript (strict)
- Deployed to GitHub Pages via GitHub Actions

## Requirements

- Node.js 26 (see [`.nvmrc`](./.nvmrc))
- pnpm 12 (pinned in `package.json` → `packageManager`)

## Getting started

```sh
pnpm install
pnpm dev
```

The dev server runs at http://localhost:4321.

## Scripts

| Command             | Action                                    |
| :------------------ | :---------------------------------------- |
| `pnpm dev`          | Start the dev server                      |
| `pnpm build`        | Build the production site to `./dist/`    |
| `pnpm preview`      | Preview the production build locally      |
| `pnpm check`        | Type-check the project with `astro check` |
| `pnpm lint`         | Lint with ESLint                          |
| `pnpm format`       | Format with Prettier                      |
| `pnpm format:check` | Check formatting without writing          |

## Conventions

- **Commits:** [Conventional Commits 1.0](https://www.conventionalcommits.org/en/v1.0.0/), enforced by commitlint.
- **Git hooks** (lefthook): pre-commit formats and lints staged files, commit-msg validates the message and pre-push type-checks the project.
- **Formatting:** EditorConfig + Prettier (tabs, LF line endings).

## Deployment

Every push to `main` runs format, lint, type-check and build in CI and deploys
to GitHub Pages. Pull requests run the same checks without deploying.
