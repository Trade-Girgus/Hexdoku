# HexDoku

The official website for **HexDoku**, a hex-grid logic game by Trade's Arcade.

## Open the website

**[Visit the actual HexDoku website](https://trade-girgus.github.io/Hexdoku/)**

The repository page you are reading contains the website's source code. The
link above opens the designed, interactive website.

## What is included

- a focused, phone-first introduction to HexDoku
- clear explanations of the four game rules
- the current app icon and the same color system used by the game
- a dedicated privacy page
- search metadata, social metadata, a sitemap, and robots configuration
- accessible focus states, semantic page structure, and reduced-motion support

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Game introduction and rules |
| `/privacy` | Privacy information and contact details |

## Project structure

```text
app/
├── components/
│   └── SiteChrome.tsx   # Header and footer
├── privacy/page.tsx
├── globals.css          # Complete visual system and responsive behavior
├── layout.tsx           # Site-wide metadata and document shell
├── page.tsx             # Main HexDoku website
├── robots.ts
└── sitemap.ts
public/
└── hexdoku-icon.png     # The game artwork used for branding
```

## Run locally

This project requires Node.js 22.13 or newer and uses pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm build
```

The site is built with React, Next.js-compatible app routes, and
[vinext](https://github.com/cloudflare/vinext).

## Content updates

- Edit the home page text and sections in `app/page.tsx`.
- Edit colors, spacing, and responsive styling in `app/globals.css`.
- Update the contact address in the `mailto:` links if support changes.
- Replace `public/hexdoku-icon.png` when the final app icon is ready.

## Contact

Feedback and bug reports: [hexdoku@gmail.com](mailto:hexdoku@gmail.com)
