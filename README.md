# Home Manager Search

Search for options and modules defined in the Nix tool [Home Manager](https://github.com/nix-community/home-manager).

Live at [hm-search.kothavade.com](https://hm-search.kothavade.com)!

## Features

- Search for any module within Home Manager 
- View metadata, including examples and links to source definitions
- Built by scraping the [Home Manager Appendix](https://nix-community.github.io/home-manager/options.xhtml)
- Updated daily, thanks to Github Actions
- Inspired by [home-manager-option-search]() <3

## Tech

- [Next.js 14](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Radix Primitives](https://radix-ui.com/primitives)
- Web Scraping with [Cheerio](https://cheerio.js.org)
- Deployed on Vercel

## Run

```bash
# optional: install bun, if you haven't already
curl -fsSL https://bun.sh/install | bash
bun install
bun run dev
```