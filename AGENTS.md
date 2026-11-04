# AGENTS.md

Personal portfolio built with Astro, deployed to GitHub Pages as a static site.

## Commands

- Install: `pnpm install` (pnpm only, never npm or yarn)
- After editing `.ts` or `.astro` files, run `pnpm check` to catch type errors.
- Formatting and linting run in pre-commit hooks; do not run them manually.
- Do not commit or push: the user reviews and commits every change.

## Conventions

- Code, comments, commits and branch names in English. Site content in Spanish.
- Comment only what the code cannot say: non-obvious decisions, workarounds or unusual practices. No comments that restate the code. Design tokens note their px equivalent or purpose.
- Content: interface strings go in the i18n dictionaries. Section content (long text and repeated entries such as experience or projects) goes in Astro content collections under `src/content/`, one file per locale.
- Indentation: tabs (size 4); YAML uses 2 spaces. Follow `.editorconfig`.
- Commits follow Conventional Commits 1.0, short format (`type(scope): description`).
- Static output only: no SSR adapters, no server endpoints.
- Do not add dependencies without asking first.
- Keep this file and `README.md` in sync when conventions or structure change.
- Styling: Tailwind CSS v4. Design tokens live in `@theme` in `src/styles/global.css`; use only theme utilities, avoid arbitrary values.
- i18n: Spanish (default, no prefix) and English (`/en/`). UI strings live in `src/i18n/locales/{es,en}.ts`; `es.ts` is the source of truth and `en.ts` must define the same keys. Prefix keys by section (`nav.`, `projects.`…).
- Never hardcode user-facing text in components; use `useTranslations` from `src/i18n/utils.ts`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
