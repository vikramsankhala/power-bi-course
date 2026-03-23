# Anthropic AI Assistant Setup

The AI Assistant uses Claude via Anthropic's API. The API key is stored securely in Netlify and never exposed to the browser.

## Steps

1. **Netlify Dashboard** → Your site → **Site configuration** → **Environment variables**
2. Add variable:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** Your Anthropic API key (paste the key you have; or get one from console.anthropic.com)
3. **Redeploy** the site for the variable to take effect.

The AI chat will call `/.netlify/functions/ai-chat`, which proxies requests to Anthropic with your key.

**Security:** Never commit API keys to git or put them in frontend code.
