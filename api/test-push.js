import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:you@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { subscription } = req.body;

    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Test reminder",
        body: "This is a test push from your backend."
      })
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Push error:", err);
    return res.status(500).json({ error: "Push failed" });
  }
}
