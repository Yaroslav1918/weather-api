import { unsubscribeUser } from "../services/subscriptionService.js";

export const unsubscribe = async (req, res) => {
  const { token } = req.params;
  try {
    await unsubscribeUser(token);
    res.status(200).json({ message: "Unsubscribed successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
