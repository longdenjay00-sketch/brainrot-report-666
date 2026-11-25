# Brainrot Report 666

Night desk. Ilse, Luz, Nia, and Mira file one issue and pass it around the ring.

## API

`GET /api/desk` returns the crew and the four handoffs as JSON. The page reads it when the site is hosted on Vercel. The static copy stays on the page if the API is not there.

## Build

```bash
npm run build
```

That checks the page, the stylesheet, the stills, and the handoff ring, then copies the site into `dist/`.

## Host

Vercel serves the static page and the `api/desk.js` function. This repo does not contain a Vercel token or a Stitch key.
