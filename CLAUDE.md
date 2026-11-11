# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal gallery of pure HTML/CSS artworks (no images or JS for the art itself), built with Next.js 15 App Router + React 19 RC, deployed to Vercel (my-css-artworks.vercel.app) with automatic deploys from git.

## Commands

Package manager is **yarn** (`yarn.lock` is committed; there is no `package-lock.json`).

- `yarn dev` — dev server at http://localhost:3000
- `yarn build` — production build (also type-checks)
- `yarn lint` — `next lint` (extends `next/core-web-vitals`, `next/typescript`)

There is no test suite.

## Architecture

### Adding an artwork touches four places

Artworks are registered by id, and the id is a closed union type, so a new artwork must be wired through all of:

1. `src/models/artworks.models.ts` — add the id to the `ArtworkId` union.
2. `src/consts/artworks.consts.ts` — add an entry to `SupportedArtworks` (name, description, `thumbnail` filename).
3. `src/components/ArtworkViewer/ArtworkViewer.tsx` — map the id to its component in `ArtworkIdComponentMap` (typed `Record<ArtworkId, ReactNode>`, so TS will flag a missing entry).
4. `public/previews/<thumbnail>` — the preview image the gallery card shows (`GalleryItem` loads `/previews/${thumbnail}`).

The artwork itself lives in `src/artwork-components/<Name>/` as a `<Name>.tsx` component plus a `<Name>.module.scss` CSS module, usually with a local `_variables.scss` for its palette/sizes.

### Routing

- `/` — logo splash; `/about`, `/contact` — static pages.
- `/artworks` — gallery of `SupportedArtworks` (`ArtworksGallery` → `GalleryItem`).
- `/artworks/[id]` — `layout.tsx` renders `ArtworksMenu` (switcher between artworks), `page.tsx` renders `ArtworkViewer` + `ArtworkDescription`. `params` is a Promise (Next 15) and must be awaited.
- Top-level nav items come from `src/consts/navigation.consts.ts`; page metadata is built from `ROOT_METADATA` in `src/consts/rootMetadata.consts.ts`.

### Global layout

`src/app/layout.tsx` renders the `Seasun` artwork (sky/sun/sea + randomly generated clouds) as a fixed full-screen background (`-z-10`) behind every page. Note `Seasun` lives in `artwork-components/` but is not a gallery artwork.

### Styling

- Mix of Tailwind utility classes (in JSX) and SCSS modules (per component). Use the `cnames([...])` helper in `src/utils/cnames.ts` to combine class strings.
- `src/app/globals.scss` pulls in `src/styles/_theme.scss` (Tailwind-v4-style `--color-*` oklch CSS variables, usable from SCSS) and holds shared rules like `.info-article`.
- Fonts are local (`src/app/fonts/`) via `next/font/local`, exposed as CSS vars: `--font-didact-gothic` (body), `--font-smooch` (headings), `--font-icons` (Material Icons Outlined, used by the `Icon` component — pass the ligature name, e.g. `<Icon name='palette' />`).
- Dark mode follows the OS (`darkMode: 'media'`).
- `tailwind.config.js` quirk: its `content` globs (`./app`, `./components`, …) don't match `src/`; class scanning of `src/**` works through the legacy `purge` key. Keep `src/**` covered if you touch this config.
- Path alias: `@/*` → `src/*`.
