export async function getSubscriberStatus(email: string, apiKey: string) {
  try {
    const response = await fetch(
      `https://api.buttondown.com/v1/subscribers/${email}`,
      {
        method: "GET",
        headers: { Authorization: `Token ${apiKey}` },
      }
    );

    // Don't check status code first—just parse and check the data
    const subscriber = await response.json();

    // The ONLY check for existence: is subscriber null?
    return {
      exists: subscriber !== null,
      confirmed: subscriber?.type === "regular",
      subscriber,
    };
  } catch (error) {
    // Network/parse errors—something actually went wrong
    console.error("Failed to fetch subscriber:", error);
    throw error;
  }
}
