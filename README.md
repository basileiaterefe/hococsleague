# HOCO CS League

Website for HOCO CS League, a student-run competitive computer science league for Howard County high schools.

All public words, names, dates, and links live in `content/site.ts`. The site is a Next.js app with no database and no backend. Forms check answers in the browser and do not send them anywhere until you connect a form service.

## Install

1. Install Node.js 20 or newer from [https://nodejs.org](https://nodejs.org).
2. Open a terminal.
3. Go into this project folder.
4. Run:

```bash
npm install
```

## Run locally

1. In this project folder, run:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. To stop the server, click the terminal and press Ctrl+C.

## Edit the content

1. Open `content/site.ts`.
2. Read the comment at the top. It lists every section and what it changes on the site.
3. Replace any text that starts with `TODO:`. Those strings show up as amber labels so you can see what is still unfinished.
4. Keep the spelling **Joshue Chen**. Do not change it to Joshua.
5. Do not add personal emails, phone numbers, home addresses, or student photos.
6. To add a photo later, put the image in `public/photos` and set that person's `photo` field to `/photos/filename.jpg`. Leave `photo` off to keep the initials avatar.
7. Save the file. Refresh the browser. If `npm run dev` is running, the page updates on its own.
8. Set `url` to your real site address before you launch. Until you do, the sitemap uses `https://example.com`.

Useful checks:

```bash
npm run lint
npm run build
```

`npm run build` writes a static site into the `out` folder.

## Connect the forms

The volunteer, sponsor, chapter, registration, and contact forms do not send data. In `components/InquiryForm.tsx`, find the comment that starts with `TODO: Connect this form to Formspree`. Put the Formspree (or similar) endpoint there, and only then add a request that posts the answers. Update the success text in `content/site.ts` (`formPendingNotice` and `formSuccessBody`) at the same time.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Open [https://vercel.com](https://vercel.com) and sign in.
3. Click **Add New**, then **Project**.
4. Import the GitHub repository.
5. Leave the framework preset as **Next.js**.
6. Leave the build command as `npm run build` and the install command as `npm install`.
7. Click **Deploy**.
8. When the deploy finishes, open the site URL Vercel gives you.
9. Copy that URL into `url` in `content/site.ts`, replacing `TODO: PRODUCTION URL`.
10. Commit, push, and let Vercel redeploy.

Vercel serves the static export from the `out` folder. You do not need a database or a server.
