// runner.test.ts
import { getSubscriberStatus } from "$lib/utils/get-subscriber-status";
import { env } from "$env/dynamic/private";

async function testGetSubscriberStatus() {
  const testEmail = "nickthiru@protonmail.com";
  const apiKey = env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    console.error("BUTTONDOWN_API_KEY not set");
    return;
  }

  try {
    const status = await getSubscriberStatus(testEmail, apiKey);
    console.log("Subscriber status:", JSON.stringify(status, null, 2));
  } catch (error) {
    console.error("Error fetching subscriber status:", error);
  }
}

// Run it
await testGetSubscriberStatus();
