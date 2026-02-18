# Vikram Power BI Course — Web Application

A detailed web application built from the **Vikram Power BI Course Outline** document. Designed for MBA bootcamp delivery and ready for Netlify deployment.

## Features

- **Lead Generation & Playbook** — Form to capture visitor info; downloadable Power BI MBA Playbook
- **Google Sheets Integration** — Form submissions saved to a Google Sheet (via Apps Script)
- **WhatsApp Chat** — Section and floating button for direct WhatsApp contact
- **Course Overview** — Bootcamp framing, target audience, learning approach
- **Interactive Visualizations** — Chart.js charts for:
  - Total hours by module (doughnut)
  - Module 1 & 2 session splits (pie, bar)
  - Bloom's taxonomy coverage (polar area)
  - 5-day schedule (bar)
  - Assessment types (doughnut)
- **Module 1** — Data & BI for Managers, BI Tools & Storytelling (4h)
- **Module 2** — Five 2-hour sessions (Install, Power Query, Modeling, DAX, Visuals & Service)
- **5-Day Schedule** — Full day-by-day table with outcomes and assessments
- **Question Bank** — Bloom-aligned Remember, Understand, Apply, Analyze, Evaluate, Create
- **Resources** — YouTube links, Microsoft samples, documentation

## Setup: Lead Form & Google Sheets

1. **Create a Google Sheet** with a tab named `Leads` and headers in Row 1:
   `Timestamp | First Name | Last Name | Email | Phone | Company | Role | Interest | Message | Site URL`

2. **Add the Apps Script:** Extensions → Apps Script → paste contents of `google-apps-script.js`

3. **Deploy:** Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone → Deploy

4. **Copy the Web app URL** and in `index.html` replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with it.

## Setup: WhatsApp

In `index.html`, replace `1234567890` in `WHATSAPP_NUMBER` with your WhatsApp number (country code + number, no + or spaces). Example: `919876543210` for India.

## Deploy to Netlify

### Option 1: Drag & Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the `power-bi-course` folder (or its contents) into the Netlify deploy zone

### Option 2: Git
1. Push this folder to a Git repository (GitHub, GitLab, Bitbucket)
2. In Netlify: **Add new site** → **Import an existing project**
3. Connect your repo
4. Build settings:
   - **Publish directory:** `.` (or leave default)
   - **Build command:** (leave empty)
5. Deploy

### Option 3: Netlify CLI
```bash
cd power-bi-course
npm install -g netlify-cli
netlify deploy --prod
```

## Local Preview

Open `index.html` in a browser, or use a simple server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- [Chart.js](https://www.chartjs.org/) for visualizations
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) fonts
- No build step — static site
