# Kiran Polawar — Personal Portfolio (Static Site)

A modern, responsive static portfolio site built with plain HTML, CSS, and JavaScript and bundled with [Vite](https://vitejs.dev/).

## Features

- Hero section with LinkedIn, Credly, and HackerRank links
- About / professional summary
- Skills (combined from both resumes, 10 categories)
- Professional experience timeline (Publicis Sapient — UHG & Bank of America, TekSystems — HSBC, Persistent — Optum, Tata Technologies)
- Projects & open source (Spring Boot starter, OMMS, SwapOne/Optimus, CVDAP, ALM, Page Builder)
- Education & certifications
- Contact section

## Project Structure

```
.
├── index.html            # Main HTML page
├── src/
│   ├── styles.css        # Styles
│   └── main.js           # Dynamic rendering of skills, experience, projects
├── vite.config.js        # Vite config
├── package.json
└── dist/                 # Build output (generated)
```

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build (http://localhost:4173)
npm run preview
```

## Deploy on Render (Static Site)

This site is a static site, so it is deployed on Render as a **Static Site** (no web server/background process needed).

### Option A — Deploy via Render Dashboard

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Static Site**.
3. Connect your repository.
4. Configure the build:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. (Optional) Set the **Node Version** to `20` or newer in the Environment section.
6. Click **Create Static Site**. Render will build and give you a `.onrender.com` URL.

### Option B — Deploy via `render.yaml` (Infrastructure as Code)

Create a file named `render.yaml` in the repo root:

```yaml
services:
  - type: web
    name: kiran-portfolio
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    pullRequestPreviewsEnabled: true
```

Then in the Render dashboard: **New** → **Blueprint** → connect the repo → Render reads `render.yaml` automatically.

### Notes

- The site uses relative asset paths (`base: "./"` in `vite.config.js`) so it works on any subpath/Render URL.
- No environment variables are required.
- After each push to the connected branch, Render automatically rebuilds and redeploys.

## Custom Domain (Optional)

In the Render dashboard, open the Static Site → **Settings** → **Custom Domains**, add your domain, and update your DNS records as instructed.

## Updating Content

- Edit `index.html` for static text (hero, about, contact, links).
- Edit `src/main.js` arrays (`skillCategories`, `experiences`, `projects`) to change skills, experience, and projects.
- Rebuild with `npm run build` (Render does this automatically on deploy).
