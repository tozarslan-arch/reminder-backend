export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const subscription = req.body;

    // For now we just log it. Later we store it.
    console.log("Received subscription:", subscription);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
