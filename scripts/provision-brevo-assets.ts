/**
 * Provisioning script for Brevo assets (lists, templates, attributes)
 * Run once during Phase 1 setup: npx tsx scripts/provision-brevo-assets.ts
 *
 * Defensive check: creates assets if missing, logs IDs if they exist.
 * NOT called on every app startup — this is a migration/setup task.
 */
/// <reference types="node" />
import { config } from "dotenv";
import { resolve } from "node:path";
import { BrevoClient } from "@getbrevo/brevo";

// Load .env file from the current working directory
config({ path: resolve(process.cwd(), ".env") });

// Load env for script execution
const BREVO_API_KEY = process.env.BREVO_API_KEY;
if (!BREVO_API_KEY) {
  console.error("BREVO_API_KEY not set in environment");
  process.exit(1);
}

const brevoClient = new BrevoClient({ apiKey: BREVO_API_KEY });

// ─── Template Definitions ───────────────────────────────────────────────────
// Uses htmlContent key with placeholder HTML.
// Later, update with branded HTML from nickthiru-dev/ assets.

const TEMPLATE_DEFINITIONS: Record<
  string,
  {
    templateName: string;
    subject: string;
    htmlContent: string;
    sender: { email: string; name: string };
    isActive: boolean;
  }
> = {
  newsletter_verify: {
    templateName: "Newsletter Verify",
    subject: "Confirm your email subscription",
    htmlContent: `<html><body style="font-family: Arial, sans-serif;"><p>Click the link below to confirm your subscription:</p><p><a href="{{ params.redirectionUrl }}">Confirm Email</a></p></body></html>`,
    sender: { email: "hello@yourdomain.com", name: "Nick" },
    isActive: true,
  },
  welcome: {
    templateName: "Welcome Email",
    subject: "Welcome to Thiru AI Labs!",
    htmlContent: `<html><body style="font-family: Arial, sans-serif;"><h1>Welcome!</h1><p>Thank you for joining our newsletter.</p></body></html>`,
    sender: { email: "hello@yourdomain.com", name: "Nick" },
    isActive: true,
  },
  waitlist_joined: {
    templateName: "Waitlist Joined",
    subject: "You've joined the waitlist!",
    htmlContent: `<html><body style="font-family: Arial, sans-serif;"><p>Hi {{params.first_name}},</p><p>You've been added to the waitlist.</p></body></html>`,
    sender: { email: "hello@yourdomain.com", name: "Nick" },
    isActive: true,
  },
};

// ─── List Definitions ───────────────────────────────────────────────────────
const LIST_DEFINITIONS = [
  { name: "Newsletter Subscribers", key: "newsletter_subs" },
  { name: "OpsPilot Waitlist", key: "waitlist_ops_pilot" },
  { name: "Social Engagement Radar Waitlist", key: "waitlist_social_engagement_radar" },
  { name: "PolicyForge Waitlist", key: "waitlist_policyforge" },
];

// ─── Attribute Definitions ──────────────────────────────────────────────────
const ATTRIBUTE_DEFINITIONS = [
  "WAITLIST_OPSPILOT",
  "WAITLIST_SOCIAL_ENGAGEMENT_RADAR",
  "WAITLIST_POLICYFORGE",
];

// ─── Webhook Definitions ────────────────────────────────────────────────────
// Webhooks require a publicly accessible URL.
// BREVO_WEBHOOK_DEV_URL: Optional ngrok URL for local testing
// PUBLIC_URL: Required for production webhook
const BREVO_WEBHOOK_SECRET = process.env.BREVO_WEBHOOK_SECRET;
const BREVO_WEBHOOK_DEV_URL = process.env.BREVO_WEBHOOK_DEV_URL;
const PUBLIC_URL = process.env.PUBLIC_URL;

// Set to "false" to skip template creation (if you've manually created them in Brevo)
const CREATE_TEMPLATES = process.env.CREATE_TEMPLATES !== "false";

// Set to "false" to skip webhook creation (if you've manually created them in Brevo)
const CREATE_WEBHOOKS = process.env.CREATE_WEBHOOKS !== "false";

// Set to "false" to skip attribute creation (if you've manually created them in Brevo)
const CREATE_ATTRIBUTES = process.env.CREATE_ATTRIBUTES !== "false";

// Set to "false" to skip list creation (if you've manually created them in Brevo)
const CREATE_LISTS = process.env.CREATE_LISTS !== "false";

const WEBHOOK_DEFINITIONS: Array<{
  name: string;
  url: string;
  required: boolean;
}> = [];

if (BREVO_WEBHOOK_DEV_URL) {
  WEBHOOK_DEFINITIONS.push({
    name: "Development (ngrok)",
    url: `${BREVO_WEBHOOK_DEV_URL}/api/brevo/webhook`,
    required: false, // Dev webhook is optional
  });
}

if (PUBLIC_URL) {
  WEBHOOK_DEFINITIONS.push({
    name: "Production",
    url: `${PUBLIC_URL}/api/brevo/webhook`,
    required: true, // Production webhook is required
  });
}

// ─── Provision Functions ────────────────────────────────────────────────────

async function provisionAttributes() {
  console.log("\n─── Contact Attributes ───");

  if (!CREATE_ATTRIBUTES) {
    console.log("⚠️  Attribute creation skipped (CREATE_ATTRIBUTES=false)");
    console.log("   Manually create attributes in Brevo dashboard:");
    console.log("   WAITLIST_OPSPILOT, WAITLIST_SOCIAL_ENGAGEMENT_RADAR, WAITLIST_POLICYFORGE (boolean type)");
    return;
  }

  const existing = await brevoClient.contacts.getAttributes();
  const existingNames = new Set(
    (existing.attributes || []).map((a: any) => a.name),
  );

  for (const attrName of ATTRIBUTE_DEFINITIONS) {
    if (existingNames.has(attrName)) {
      console.log(`✅ Attribute "${attrName}" exists`);
    } else {
      await brevoClient.contacts.createAttribute({
        attributeCategory: "normal",
        attributeName: attrName,
        type: "boolean",
      });
      console.log(`🆕 Created attribute "${attrName}" (boolean)`);
    }
  }
}

async function provisionLists(): Promise<Record<string, number>> {
  console.log("\n─── Lists ───");

  if (!CREATE_LISTS) {
    console.log("⚠️  List creation skipped (CREATE_LISTS=false)");
    console.log("   Manually create lists in Brevo dashboard, then set IDs in:");
    console.log("   src/lib/config/brevo-lists.ts");
    return {
      newsletter_subs: 0,
      waitlist_ops_pilot: 0,
      waitlist_social_engagement_radar: 0,
      waitlist_policyforge: 0,
    };
  }

  const existing = await brevoClient.contacts.getLists();
  const listIds: Record<string, number> = {};

  for (const listDef of LIST_DEFINITIONS) {
    const found = existing.lists?.find((l: any) => l.name === listDef.name);
    if (found) {
      console.log(`✅ List "${listDef.name}" exists (ID: ${found.id})`);
      listIds[listDef.key] = found.id;
    } else {
      const created = await brevoClient.contacts.createList({
        name: listDef.name,
        folderId: 0, // Update with actual folder ID if using folders
      });
      console.log(`🆕 Created list "${listDef.name}" (ID: ${created.id})`);
      listIds[listDef.key] = created.id;
    }
  }

  return listIds;
}

async function provisionTemplates(): Promise<Record<string, number>> {
  console.log("\n─── Email Templates ───");

  if (!CREATE_TEMPLATES) {
    console.log("⚠️  Template creation skipped (CREATE_TEMPLATES=false)");
    console.log("   Manually create templates in Brevo dashboard, then set IDs in:");
    console.log("   src/lib/config/brevo-email-templates.ts");
    return {
      newsletter_verify: 0, // Set manually in config
      welcome: 0,
      waitlist_joined: 0,
    };
  }

  const existing = await brevoClient.transactionalEmails.getSmtpTemplates();
  const templateIds: Record<string, number> = {};

  for (const [key, templateDef] of Object.entries(TEMPLATE_DEFINITIONS)) {
    const found = existing.templates?.find(
      (t: any) => t.name === templateDef.templateName,
    );

    if (found) {
      console.log(`✅ Template "${templateDef.templateName}" exists (ID: ${found.id})`);
      templateIds[key] = found.id;
    } else {
      const created = await brevoClient.transactionalEmails.createSmtpTemplate({
        templateName: templateDef.templateName,
        subject: templateDef.subject,
        htmlContent: templateDef.htmlContent,
        sender: templateDef.sender,
        isActive: templateDef.isActive,
      });
      console.log(`🆕 Created template "${templateDef.templateName}" (ID: ${created.id})`);
      templateIds[key] = created.id;
    }
  }

  return templateIds;
}

async function provisionWebhooks(): Promise<Record<string, number>> {
  console.log("\n─── Webhooks ───");

  if (!CREATE_WEBHOOKS) {
    console.log("⚠️  Webhook creation skipped (CREATE_WEBHOOKS=false)");
    console.log("   Manually create webhooks in Brevo dashboard, then configure:");
    console.log("   - URL: https://yoursite.com/api/brevo/webhook");
    console.log("   - Event: listAddition (marketing webhook)");
    console.log("   - Authentication: Bearer token (BREVO_WEBHOOK_SECRET)");
    return {};
  }

  if (!BREVO_WEBHOOK_SECRET) {
    console.log("⚠️  BREVO_WEBHOOK_SECRET not set — skipping webhook creation");
    console.log("   Set BREVO_WEBHOOK_SECRET in .env and re-run to create webhooks");
    return {};
  }

  if (WEBHOOK_DEFINITIONS.length === 0) {
    console.log("⚠️  No webhook URLs configured — skipping webhook creation");
    console.log("   Set BREVO_WEBHOOK_DEV_URL and/or PUBLIC_URL in .env to create webhooks");
    return {};
  }

  const existing = await brevoClient.webhooks.getWebhooks();
  const existingUrls = new Set(
    (existing.webhooks || []).map((w: any) => w.url),
  );
  const webhookIds: Record<string, number> = {};

  for (const webhookDef of WEBHOOK_DEFINITIONS) {
    if (existingUrls.has(webhookDef.url)) {
      console.log(`✅ Webhook "${webhookDef.name}" exists (URL: ${webhookDef.url})`);
      // Find the existing webhook ID
      const found = existing.webhooks?.find((w: any) => w.url === webhookDef.url);
      if (found) {
        webhookIds[webhookDef.name] = found.id;
      }
    } else {
      const created = await brevoClient.webhooks.createWebhook({
        url: webhookDef.url,
        type: "marketing",
        events: ["listAddition"],
        description: `${webhookDef.name} webhook for DOI confirmation`,
        auth: {
          type: "bearer",
          token: BREVO_WEBHOOK_SECRET,
        },
      });
      console.log(`🆕 Created webhook "${webhookDef.name}" (ID: ${created.id}, URL: ${webhookDef.url})`);
      webhookIds[webhookDef.name] = created.id;
    }
  }

  return webhookIds;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Starting Brevo asset provisioning...");

  try {
    await provisionAttributes();
    const listIds = await provisionLists();
    const templateIds = await provisionTemplates();
    const webhookIds = await provisionWebhooks();

    console.log("\n═══════════════════════════════════════════════════════════");
    console.log("📋 Update your config files with these IDs:");
    console.log("═══════════════════════════════════════════════════════════");

    console.log("\n// website/src/lib/config/brevo-lists.ts");
    console.log("export const BREVO_LIST_IDS =", JSON.stringify(listIds, null, 2), "as const;");

    console.log("\n// website/src/lib/config/brevo-email-templates.ts");
    console.log("export const BREVO_TEMPLATE_IDS =", JSON.stringify(templateIds, null, 2), "as const;");

    if (Object.keys(webhookIds).length > 0) {
      console.log("\n// Webhooks created:");
      for (const [name, id] of Object.entries(webhookIds)) {
        console.log(`//   ${name}: ID ${id}`);
      }
      console.log("// Verify webhooks in Brevo dashboard → Settings → Webhooks");
    } else {
      console.log("\n⚠️  No webhooks created — manual setup required:");
      console.log("   1. Set BREVO_WEBHOOK_SECRET in .env");
      console.log("   2. Set PUBLIC_URL (and optionally BREVO_WEBHOOK_DEV_URL) in .env");
      console.log("   3. Re-run: npx tsx scripts/provision-brevo-assets.ts");
      console.log("   OR create webhooks manually in Brevo dashboard → Settings → Webhooks");
    }

    console.log("\n✅ Provisioning complete!");
  } catch (error) {
    console.error("❌ Provisioning failed:", error);
    process.exit(1);
  }
}

main();
