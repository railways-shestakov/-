# NOVA — Next.js Landing Page

A polished, responsive landing page built with Next.js App Router and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload/push this project to the repository.
3. Go to Vercel and import the GitHub repository.
4. Vercel will detect Next.js automatically.
5. Click Deploy.

No environment variables are required.

## Customize

Most of the content is in `app/page.js`.
Visual styling is in `app/page.module.css`.
Site metadata is in `app/layout.js`.

Replace:
- `NOVA` with your brand
- headline and copy
- feature cards
- email address
- colors in `app/globals.css`

## Project structure

- `app/page.js` — landing page
- `app/page.module.css` — page styles
- `app/globals.css` — global styles
- `app/layout.js` — metadata/layout
- `package.json` — dependencies and scripts
- `next.config.mjs` — Next.js config
