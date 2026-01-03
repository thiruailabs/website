# Waitlist Setup Guide

## Overview

The waitlist functionality uses Tally Forms - a free, no-code form builder that requires zero backend infrastructure.

## Setup Steps

### 1. Create a Tally Account

1. Go to [tally.so](https://tally.so)
2. Sign up for a free account (no credit card required)
3. Free tier includes unlimited forms and unlimited responses

### 2. Create the Waitlist Form

1. Click "Create new form"
2. Choose "Start from scratch"
3. Add the following fields:

   **Field 1: Name**
   - Type: Short text
   - Label: "Full Name"
   - Required: Yes

   **Field 2: Email**
   - Type: Email
   - Label: "Email Address"
   - Required: Yes
   - Enable email validation

   **Field 3: LinkedIn Profile (Optional)**
   - Type: URL
   - Label: "LinkedIn Profile (optional)"
   - Required: No
   - Placeholder: "https://linkedin.com/in/yourprofile"

   **Field 4: How did you hear about us?**
   - Type: Multiple choice
   - Options: Twitter, LinkedIn, Product Hunt, Friend, Other
   - Required: No

4. Customize the form:
   - **Form title:** "Join the Waitlist for LinkedIn Ghostwriter Agent"
   - **Submit button text:** "Join Waitlist"
   - **Thank you message:** "Thanks for joining! We'll be in touch soon with early access details."

### 3. Configure Form Settings

1. Go to "Settings" tab
2. **Notifications:**
   - Enable email notifications for new submissions
   - Add your email address
3. **Privacy:**
   - Enable GDPR compliance
   - Add privacy policy link if you have one
4. **Design:**
   - Choose "Minimal" theme
   - Match your brand colors if desired

### 4. Get the Embed Code

1. Click "Share" button
2. Select "Embed" tab
3. Copy the embed URL (looks like: `https://tally.so/embed/YOUR_FORM_ID`)
4. The form ID is the part after `/embed/`

### 5. Update the Website Code

1. Open `/home/dev/projects/thiru-ai-labs/website/src/lib/components/WaitlistModal.svelte`
2. Find this line:
   ```html
   data-tally-src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
   ```
3. Replace `YOUR_FORM_ID` with your actual Tally form ID
4. Save the file

### 6. Add Tally Script (if needed)

If the iframe doesn't load properly, you may need to add the Tally script to your app:

1. Open `/home/dev/projects/thiru-ai-labs/website/src/app.html`
2. Add this before the closing `</body>` tag:
   ```html
   <script async src="https://tally.so/widgets/embed.js"></script>
   ```

## Testing

1. Start your dev server: `npm run dev`
2. Navigate to `/products`
3. Click "Join waitlist" button
4. Fill out the form and submit
5. Check your email for the notification
6. Verify the submission appears in your Tally dashboard

## Managing Waitlist

### View Submissions

1. Log into Tally
2. Click on your form
3. Go to "Responses" tab
4. View all submissions in a table format

### Export Data

1. Click "Export" button
2. Choose format: CSV, Excel, or Google Sheets
3. Import into your email marketing tool when ready to launch

### Email Notifications

- You'll receive an email for each new signup
- Configure notification frequency in Settings
- Can disable notifications if volume gets high

## Cost

- **Free tier:** Unlimited forms, unlimited responses
- **No credit card required**
- **No hidden fees**

## Alternative: Custom Backend (Future)

If you later want full control over the data, you can migrate to a custom solution:

### Option 1: Supabase (Recommended)

1. Create Supabase project (free tier: 500MB database)
2. Create `waitlist` table with columns: id, name, email, linkedin_url, created_at
3. Create API endpoint in SvelteKit
4. Replace Tally iframe with custom form

### Option 2: Google Sheets

1. Use Google Sheets as a database
2. Create API endpoint that writes to Sheets
3. Free and simple, but not scalable

### Option 3: Email Service (Mailchimp/ConvertKit)

1. Use their embedded forms
2. Automatically adds to email list
3. Ready for launch announcements

## Recommendation

**Start with Tally** for MVP validation. It's free, fast, and requires zero backend setup. You can always migrate to a custom solution later if needed.

## Support

- Tally documentation: https://tally.so/help
- Tally community: https://tally.so/community
