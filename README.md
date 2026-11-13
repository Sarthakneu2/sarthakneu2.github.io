# Sarthak Neupane | Portfolio

A multi-page Astro portfolio starter. It uses a clean editorial design and keeps project content separate from the page layout so you can update it easily.

## 1. Run the website

Open this folder in VS Code. Open Terminal and run:

```bash
npm install
npm run dev
```

Open the local URL Astro prints, usually `http://localhost:4321/`.

To create a production build:

```bash
npm run build
```

## 2. Personal details to replace

Search the project for these placeholders and replace them:

- `YOUR_EMAIL_ADDRESS` in `src/pages/contact.astro`
- `YOUR_LINKEDIN_URL` in `src/pages/contact.astro`
- The CV page is maintained in `src/pages/cv.astro` with its content in `src/data/site.js`.
- `https://github.com/Sarthakneu2` is already set from the supplied profile context. Check that it is correct before publishing.
- Replace `https://example.com` in `astro.config.mjs` with your final domain.

## 3. Replace project photographs

Put your own images in `public/images/` and keep the filenames below, or update the paths in `src/data/projects.js`.

| Filename | Suggested photograph |
|---|---|
| `hero-workbench.svg` | A portrait or a photo of you working on a technical project |
| `smart-stick.svg` | Your smart assistive stick prototype |
| `tachometer.svg` | Tachometer circuit, rotating disc or Proteus design |
| `ev-monitor.svg` | EV charging monitor, charger circuit or dashboard |
| `picogrid.svg` | Physical PicoGrid prototype and energy dashboard |
| `agrivoltaics.svg` | Agrivoltaics pilot, solar panels and crops |
| `quant-research.svg` | Your own research setup, charts or code |
| `nea-field.svg` | NEA distribution centre or field visit |
| `hydropower.svg` | Nupche Likhu hydropower facility |
| `leadership.svg` | A real event photograph from your student or FDE leadership work |

The included SVGs are labelled conceptual placeholders. Replace them with photographs you have permission to publish. Do not use a placeholder as evidence of a completed project.

## 4. Update the content

- Project descriptions and image paths: `src/data/projects.js`
- Your biography: `src/data/site.js`
- Experience and leadership entries: `src/data/site.js`
- CV content and printable layout: `src/pages/cv.astro` and `src/data/site.js`
- Main visual styling: `src/styles/global.css`
- Main navigation: `src/components/Header.astro`

## 5. Before publishing

1. Replace every placeholder image with an authentic photo, diagram or screenshot.
2. Add your professional email and LinkedIn URL.
3. Review the CV page at `/cv/` and use its print control to save a PDF when needed.
4. Check project descriptions, dates, titles and contributions for accuracy.
5. Test every link and run `npm run build`.
6. Remove any photograph that includes people who have not agreed to be shown publicly.

The portfolio intentionally distinguishes the PicoGrid physical prototype from the separate simulation-based software platform. It also describes future FDE plans as ongoing or proposed work, not completed achievements.
