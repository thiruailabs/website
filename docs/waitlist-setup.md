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
4. Enter your email and submit
5. Check your inbox for Buttondown's confirmation email
6. Verify the subscriber appears in your Buttondown dashboard with tag `ghostwriter_waitlist`

## Managing Waitlist

### View Subscribers

1. Log into [Buttondown](https://buttondown.com)
2. Go to **Subscribers**
3. Filter by tag: `ghostwriter_waitlist`
4. View all waitlist members

### Export Data

1. In Buttondown, go to **Subscribers**
2. Filter by tag: `ghostwriter_waitlist`
3. Click **Export** → Choose CSV or JSON
4. Use for launch announcements or migration

### Send Updates

To send an email to waitlist members only:

1. Go to **Emails** → **New Email**
2. Write your update
3. Under **Recipients**, select tag: `ghostwriter_waitlist`
4. Send or schedule

## Tag Strategy

Use tags to segment your audience across both sites:

**nickthiru.dev tags:**
- `site` - general newsletter subscribers
- `technical` - technical content readers
- `operator` - operator content readers

**thiruailabs.com tags:**
- `ghostwriter_waitlist` - LinkedIn Ghostwriter waitlist
- `ghostwriter_beta` - beta testers (future)
- `ghostwriter_customer` - paying customers (future)
- `competitor_intel_waitlist` - Product #2 waitlist (future)
- `research_waitlist` - Product #3 waitlist (future)

## Cost

**Buttondown Free Tier:**
- Up to 100 subscribers: Free
- Unlimited emails
- All features included

**Paid Tier (if needed):**
- $9/month for up to 1,000 subscribers
- $29/month for up to 5,000 subscribers

## Benefits Over Tally

- ✅ **Email sending built-in** - send updates directly
- ✅ **Welcome automation** - immediate confirmation
- ✅ **Unified management** - one dashboard for all subscribers
- ✅ **Cross-promotion** - announce products to writing audience
- ✅ **Better analytics** - see overlap between content and products
- ✅ **No extra tools** - Buttondown handles everything

## Support

- Buttondown documentation: https://buttondown.com/help
- Buttondown support: support@buttondown.com
