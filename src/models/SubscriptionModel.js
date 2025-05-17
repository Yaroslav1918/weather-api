import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  city: { type: String, required: true },
  frequency: { type: String, enum: ["hourly", "daily"], required: true },
  confirmed: { type: Boolean, default: false },
  token: { type: String, required: true, unique: true },
});

export default mongoose.model("Subscription", SubscriptionSchema);
