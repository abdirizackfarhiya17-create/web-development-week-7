# SpendWise 💰

## Project Description
SpendWise is a modern, intuitive personal finance tracker designed to help users monitor their daily expenses, set realistic budgets, and gain better insights into their spending habits. The application features an interactive user interface, real-time dynamic calculations, and persistent state management to keep financial tracking seamless and straightforward.

## Technologies Used
* **HTML5:** Semantic markup structure for accessibility and SEO.
* **CSS3:** Custom styles, responsive grid layouts, and modern UI transitions.
* **JavaScript (ES6+):** Dynamic calculations, event handling, and data persistence.
* **Git & GitHub:** Version control and remote repository hosting.
* **Netlify:** Cloud hosting platform with automated continuous deployment workflows.

## GitHub Repository Information
* **Repository Link:** [https://github.com/abdirizackfarhiya17-create/web-development-Assignment-week-6]
* **Default Branch:** `main`

## Live Netlify Website URL
* **Live Link:** [https://spendwise-by-farhiya.netlify.app](https://spendwise-by-farhiya.netlify.app)
---

## Deployment Process Summary
1. **Deployment Readiness Check:** Reviewed the root structure to ensure `index.html` was in the root directory and asset paths (CSS/JS) used clean, relative linking.
2. **GitHub Initialization:** Initialized a local Git repository, committed all baseline SpendWise assets, and pushed them to a newly created public GitHub repository.
3. **Netlify Connection:** Logged into Netlify using GitHub authentication, selected "Import an existing project," and authorized access to the SpendWise repository.
4. **Configuration & Build:** Configured the deployment settings by choosing the `main` branch, leaving the build command blank (for vanilla HTML/CSS/JS), and setting the publish directory to the root (`/`).
5. **Customizing Subdomain:** Navigated to **Site configuration** > **Domain management** > **Production domains** and updated the default generated string to a clean, unique name (`spendwise-appname`).
6. **Continuous Deployment Setup:** Verified automated integrations by editing a visible text header in `index.html`, pushing to GitHub, and observing Netlify trigger a build automatically within seconds.

## Challenges Encountered During Deployment
* **Broken File Paths:** Initially, some background images and script icons failed to load on the production site because the file names used mixed casing (`/Assets/` instead of `/assets/`). This was caught during testing, updated locally, and synced.
* **Subdomain Availability:** The first choice for a custom subdomain (`spendwise.netlify.app`) was already taken. I resolved this by appending a personalized identifier to keep the branding professional.

## Lessons Learned
* **Case-Sensitivity Matters:** Local development environments (like Windows) are often forgiving with file casing, whereas Netlify’s Linux-based production environments strictly distinguish between uppercase and lowercase letters.
* **The Power of Continuous Deployment (CI/CD):** Connecting Git pipelines to modern hosting tools drastically reduces deployment friction. Eliminating manual file dragging ensures that fixes reach users almost instantly.
