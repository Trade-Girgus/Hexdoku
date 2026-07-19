# HexDoku Website

The official website for **HexDoku**, a witchy hex-grid logic game by Trade's
Arcade.

## What is included

- a responsive home page built around the real HexDoku board and crystal style
- visual explanations for all four game rules
- feature, scoring, FAQ, and development-contact sections
- dedicated support and privacy pages
- search metadata, social metadata, a sitemap, and robots configuration
- accessible focus states, semantic page structure, and reduced-motion support

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Game introduction, rules, features, scoring, and FAQ |
| `/support` | Bug reports, feedback, help, and quick answers |
| `/privacy` | Plain-language privacy information |

## Project structure

```text
app/
├── components/
│   ├── HexArt.tsx       # Reusable crystal, X, board, and rule artwork
│   └── SiteChrome.tsx   # Header and footer
├── privacy/page.tsx
├── support/page.tsx
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
- Edit colors, spacing, board art, and responsive styling in `app/globals.css`.
- Edit the reusable hex layouts in `app/components/HexArt.tsx`.
- Update the contact address in the `mailto:` links if support changes.
- Replace `public/hexdoku-icon.png` when the final app icon is ready.

## Contact

Feedback and bug reports: [tradesarcade@gmail.com](mailto:tradesarcade@gmail.com)
