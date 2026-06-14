# AITLA — AI Thought Leadership Alliance

A fast, dependency-free marketing landing page for **AITLA**, the AI Thought
Leadership Alliance — a collective of industry mavericks helping leaders
navigate AI and data transformation with confidence and clarity.

## Tech

Plain **HTML, CSS and a little JavaScript** — no build step, no frameworks, no
dependencies. Fonts (Inter + Sora) are loaded from Google Fonts.

```
.
├── index.html                  # The page
├── assets/
│   ├── css/styles.css          # All styling
│   ├── js/main.js              # Mobile nav toggle + auto footer year
│   └── img/
│       ├── logo.png            # AITLA logo (header + Open Graph image)
│       └── favicon.svg         # Blue→teal gradient favicon
├── README.md
└── .github/workflows/deploy.yml  # GitHub Pages deploy on push to main
```

## Run locally

It's a static site — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

A workflow (`.github/workflows/deploy.yml`) deploys the site to GitHub Pages on
every push to `main`. To enable it:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or re-run the workflow) and the site goes live at:
   `https://jimbobal.github.io/Aitla-website/`

## ⚠️ Placeholders to confirm

- **Contact email:** `hello@aitla.org` (used in the "Get in touch" button) —
  **still a placeholder, please confirm.**

Confirmed values now in use:

- **LinkedIn:** `https://www.linkedin.com/company/aitla-ai/` (header-adjacent
  Follow section, CTA and footer).

## LinkedIn feed

The home page has a dedicated **Follow on LinkedIn** section. A *live* LinkedIn
post feed is intentionally **not** embedded: LinkedIn provides no free, official
embed for company-page feeds, so a live feed would require a third-party widget
(e.g. Elfsight, EmbedSocial, Taggbox) and an external script — at odds with this
site being dependency-free. A clearly marked placeholder in `index.html`
(`LIVE FEED PLACEHOLDER`) shows exactly where to drop such a widget if desired.
