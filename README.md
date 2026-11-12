# Japan–Taiwan CFD Workshop 2026 — Simple Website

Minimal **two-page** English workshop website modeled on a conventional academic meeting page. Uses the provided Workshop logo (no National Cheng Kung University visual branding). No build tools, packages or paid hosting required.

## Pages

- `index.html` — short overview, complete two-day program, organizers, registration placeholder, and contact.
- `abstracts.html` — speaker names and spaces for presentation titles and abstracts.
- `config.js` — configure Google Forms registration.
- `styles.css` — site colors and mobile-friendly layout.
- `script.js` — displays the registration button if a public Google Forms link is configured.
- `assets/workshop-logo.png` — provided workshop logo.
- `downloads/workshop-program.pdf` — current workshop program.

## Publish with GitHub Pages

1. Create a **public** GitHub repository, such as `japan-taiwan-cfd-2026`.
2. Upload **all the files and folders inside this ZIP**, not the ZIP file itself, to the repository root.
3. Go to `Settings → Pages`, choose **Deploy from a branch**, `main`, `/ (root)` and click **Save**.
4. Website: `https://YOUR-USERNAME.github.io/japan-taiwan-cfd-2026/` (example; replace with your GitHub account).

## Enable registration later

Create a Google Form, click **Send → Link** and copy the public respondent link. Edit `config.js`:

```js
window.WORKSHOP_CONFIG = {
  registrationFormUrl: "https://forms.gle/YOUR-PUBLIC-LINK"
};
```

Save/commit the file in GitHub. The Registration section will then show a **Register via Google Forms** link automatically. Until then, it only displays a "coming soon" message.

## Update titles and abstracts

Edit `abstracts.html`: find the speaker name, replace `To be announced` with the actual title, and add a paragraph below the title, for example:

```html
<p><strong>Title:</strong> My Research Talk</p>
<p><strong>Abstract:</strong> The abstract text goes here.</p>
```

## Notes

- The program and speaker affiliations are based on the updated 3-page workshop program PDF. Speaker talk titles and the exact venue/room have not been confirmed.
- The second day includes software demos/tutorials. Times and software availability may change.
- The website is **not live** until you upload it and enable GitHub Pages.
- The static site itself does not collect personal information; Google Forms will handle registration after enabled.
