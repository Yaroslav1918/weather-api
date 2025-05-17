import { confirmSubscription } from "../services/subscriptionService.js";

export const confirm = async (req, res) => {
  const { token } = req.params;
  try {
    await confirmSubscription(token);
    res.status(200).json({ message: "Subscription confirmed successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
