# Chem 126 Quiz Site

A static multiple-choice quiz site covering electroanalytical methods:

- Biosensors
- Electroanalysis & Potentiometry
- Electrogravimetric & Coulometric Methods
- Voltammetry

Pick a topic, answer each question, see the correct answer plus an explanation citing the source slide deck, and get a per-topic score breakdown at the end.

## Run locally

```bash
python3 -m http.server 3011
# open http://127.0.0.1:3011/
```

No build step, no dependencies — plain HTML, CSS, and JS.

## Deploy

This is a fully static site. Deploys as-is to Vercel, Netlify, Cloudflare Pages, or any static host.

## Files

- `index.html` — page shell
- `styles.css` — visual styles
- `app.js` — quiz logic
- `questions.js` — question bank
