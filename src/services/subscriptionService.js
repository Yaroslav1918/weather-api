import Subscription from "../models/SubscriptionModel.js";
import { v4 as uuidv4 } from "uuid";
import { sendConfirmationEmail } from "../utils/nodemailer.js";

export const subscribeUser = async (email, city, frequency) => {
  const isUserSubscribed = await Subscription.findOne({ email, city });

  if (isUserSubscribed) {
    throw new Error("Email already subscribed");
  }

  const token = uuidv4();

  const newSubscription = new Subscription({
    email,
    city,
    frequency,
    confirmed: false,
    token,
  });

  await newSubscription.save();
  await sendConfirmationEmail(email, token);
};

export const confirmSubscription = async (token) => {
  const subscription = await Subscription.findOne({ token });

  if (!subscription) {
    throw new Error("Token not found");
  }

  subscription.confirmed = true;
  await subscription.save();
};

export const unsubscribeUser = async (token) => {
  const subscription = await Subscription.findOne({ token });

  if (!subscription) {
    throw new Error("Token not found");
  }

  await Subscription.deleteOne({ token });
};
