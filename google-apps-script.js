/**
 * Google Apps Script for Power BI Course Lead Form
 * 
 * SETUP INSTRUCTIONS (use Solinexta@gmail.com):
 * 
 * 1. Log into Google with Solinexta@gmail.com
 * 2. Go to sheets.google.com → Create a new spreadsheet
 * 3. Rename the first sheet tab to "Leads" (or keep default and update SHEET_NAME below)
 * 4. In Row 1, add these headers: Timestamp | First Name | Last Name | Email | Phone | Company | Role | Interest | Message | Site URL
 * 5. Go to Extensions → Apps Script
 * 6. Delete any default code and paste this entire file
 * 7. Click Deploy → New deployment → Select type: Web app
 * 8. Description: "Lead form handler"
 * 9. Execute as: Me | Who has access: Anyone
 * 10. Click Deploy, authorize if prompted, then COPY the Web app URL
 * 11. In index.html, replace YOUR_GOOGLE_APPS_SCRIPT_URL with the copied URL
 */

const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return createResponse('Error: Sheet "' + SHEET_NAME + '" not found. Create a tab with that name.', 500);
    }

    const params = e.parameter || {};
    const timestamp = new Date().toISOString();
    const row = [
      timestamp,
      params.firstName || '',
      params.lastName || '',
      params.email || '',
      params.phone || '',
      params.company || '',
      params.role || '',
      params.interest || '',
      params.message || '',
      params.siteUrl || ''
    ];

    sheet.appendRow(row);

    const siteUrl = (params.siteUrl || '').replace(/\/$/, '');
    const playbookUrl = siteUrl ? siteUrl + '/playbook.html' : 'playbook.html';

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You — Playbook Ready</title>
  <style>
    body { font-family: -apple-system, sans-serif; background: #0f1419; color: #e7e9ea; padding: 48px 24px; text-align: center; }
    h1 { color: #f2b94e; margin-bottom: 16px; }
    a { display: inline-block; margin-top: 24px; padding: 16px 32px; background: #f2b94e; color: #0f1419; font-weight: 600; text-decoration: none; border-radius: 10px; }
    a:hover { opacity: 0.9; }
    p { color: #8b98a5; max-width: 400px; margin: 0 auto; }
  </style>
</head>
<body>
  <h1>Thank You!</h1>
  <p>Your information has been received. Click below to download your Power BI MBA Playbook.</p>
  <a href="${playbookUrl}">Download Power BI Playbook</a>
  <p style="margin-top: 32px; font-size: 0.9rem;">You can close this tab and return to the course page.</p>
</body>
</html>`;

    return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (err) {
    return createResponse('Error: ' + err.toString(), 500);
  }
}

function createResponse(message, code) {
  return ContentService.createTextOutput(JSON.stringify({ error: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
