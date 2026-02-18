# Google Sheets Setup for Lead Form

**Account:** Solinexta@gmail.com

## Step-by-Step Instructions

### 1. Create the Google Sheet

1. Log into [Google](https://accounts.google.com) with **Solinexta@gmail.com**
2. Go to [sheets.google.com](https://sheets.google.com)
3. Click **Blank** to create a new spreadsheet
4. Name it (e.g. "Power BI Course Leads")

### 2. Set Up the Leads Tab

1. The first sheet tab is usually "Sheet1" — rename it to **Leads** (right-click tab → Rename)
2. In **Row 1**, add these headers (one per column):

   | A | B | C | D | E | F | G | H | I | J |
   |---|---|---|---|---|---|---|---|---|---|
   | Timestamp | First Name | Last Name | Email | Phone | Company | Role | Interest | Message | Site URL |

### 3. Add the Apps Script

1. In the Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Open `google-apps-script.js` from this project and copy its entire contents
4. Paste into the Apps Script editor
5. Click **Save** (disk icon) and name the project (e.g. "Lead Form Handler")

### 4. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. **Description:** Lead form handler
4. **Execute as:** Me (Solinexta@gmail.com)
5. **Who has access:** Anyone
6. Click **Deploy**
7. Authorize the app when prompted (Review permissions → Choose your account → Allow)
8. **Copy the Web app URL** (looks like `https://script.google.com/macros/s/xxxxx/exec`)

### 5. Connect the Website

1. Open `index.html` in this project
2. Find the line: `const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the URL you copied
4. Save and redeploy your website

Form submissions will now be saved to the Leads sheet in your Google Sheet.
