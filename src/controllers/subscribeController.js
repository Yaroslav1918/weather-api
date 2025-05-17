import { subscribeUser } from "../services/subscriptionService.js";

export const subscribe = async (req, res) => {
  const { email, city, frequency } = req.body;
  if (!email || !city || !frequency)
    return res.status(400).json({ error: "Invalid input" });

  try {
    await subscribeUser(email, city, frequency);
    res
      .status(200)
      .json({ message: "Subscription successful. Confirmation email sent." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
