# Md. Reazul Islam — academic portfolio

Personal research website. Plain HTML, CSS and JavaScript, so there is no build step and nothing to install. GitHub Pages serves it as-is.

## Deploy in 5 minutes

Your GitHub username is `md-reazul-islam`, so your free GitHub Pages address is **https://md-reazul-islam.github.io**.

1. On GitHub, create a new **public** repository named exactly `md-reazul-islam.github.io`.
2. Upload everything in this folder (including the hidden `.nojekyll` file) to the root of that repository.
   - Web upload: *Add file → Upload files*, drag the folder contents in, commit.
   - Or with git:
     ```bash
     git clone https://github.com/md-reazul-islam/md-reazul-islam.github.io.git
     cd md-reazul-islam.github.io
     # copy the site files here
     git add . && git commit -m "Launch portfolio" && git push
     ```
3. Go to *Settings → Pages*. Under *Build and deployment*, choose *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
4. Wait 1–2 minutes and open https://md-reazul-islam.github.io.

### About the name `reazul.github.io`

A `username.github.io` address always matches the account name. To get `reazul.github.io` you would need a GitHub account called `reazul` (check whether it is free at https://github.com/reazul). Two alternatives:

- **Rename your account** to a shorter handle in *Settings → Account → Change username*. Old links redirect, but update your CV and Scholar profile.
- **Use your own domain** (recommended, you already own `mdreazulislam.info`). Add a file named `CNAME` containing `mdreazulislam.info` (or `www.mdreazulislam.info`), then in your domain DNS add the GitHub Pages records listed at https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site. This replaces the WordPress site with this one.

## Updating content

Almost everything lives in **`assets/js/data.js`**:

| What | Edit |
|---|---|
| Bio, interests, links, email | `SITE` |
| Current research | `RESEARCH` |
| News items | `NEWS` (newest first) |
| Papers | `PUBLICATIONS` — add `year`, `url`, `abstract`, `featured: true` |
| Projects | `PROJECTS` — `cat` must be a key of `PROJECT_CATS` |
| Jobs | `EXPERIENCE` |
| Talks, workshops | `TALKS` |
| Awards, reviewing, media, skills, gallery | `AWARDS`, `SERVICE`, `MEDIA`, `SKILLS`, `GALLERY` |

Commit the change and the site updates within a minute or two.

**Replace the CV** by uploading a new PDF to `assets/cv/Md_Reazul_Islam_CV.pdf` with the same name.

**Images** currently load from `mdreazulislam.info`. If you retire that WordPress site, download the images into `assets/img/` and change the first line of `data.js` to `const WP = "assets/img/";` (keeping the same folder structure), or edit each path.

## Things to fill in

- Years, DOIs and links for publications marked “Forthcoming and other”.
- Confirm your advisor and lab name in `SITE.lab` and the bio.
- A professional headshot (square, at least 400×400) to replace the current photo.
- URLs for the Smart LMS and EasySchool media mentions, if they exist online.

## Features

- Animated, camera-style heart and respiration traces in the hero, with a motion-artifact toggle that illustrates the PhD problem
- Search and filter for publications, one-click citation and BibTeX copy, expandable summaries
- Filterable project grid with image carousels
- Experience timeline filtered by teaching, research and industry
- Gallery with lightbox and keyboard navigation
- Site-wide search with Ctrl K or ⌘ K (or press `/`)
- Light and dark themes, remembered per visitor
- Short and full bio with a copy button for event organizers
- Embedded CV with download
- Responsive down to small phones, keyboard accessible, respects reduced-motion settings
- SEO: description, Open Graph and schema.org Person data so Google can link your profiles

## Optional extras

- **Analytics:** add a privacy-friendly snippet such as GoatCounter before `</body>` in `index.html`.
- **Google Search Console:** verify the site so it appears for searches of your name.
