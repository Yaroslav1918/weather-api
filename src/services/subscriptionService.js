import axios from "axios";

import Subscription from "../models/SubscriptionModel.js";
import { sendConfirmationEmail } from "../utils/nodemailer.js";
import { generateToken, verifyToken } from "../utils/token.js";
import { weatherUrl } from "../utils/config.js";
import { getValidEmail } from "../utils/validEmail.js";

export const subscribeUser = async (email, city, frequency) => {
  try {
    const isValidEmail = getValidEmail(email);
    if (!isValidEmail) {
      throw new Error("Invalid email");
    }
    const isUserSubscribed = await Subscription.findOne({ email, city });
    if (isUserSubscribed) {
      throw new Error("Email already subscribed");
    }
    const response = await axios.get(`${weatherUrl}&q=${city}`);
    if (!response.data || !response.data.location) {
      throw new Error("Failed to fetch city data.");
    }
    const token = generateToken(email, city);
    const newSubscription = new Subscription({
      email,
      city,
      frequency,
      confirmed: false,
    });

    await newSubscription.save();
    await sendConfirmationEmail(email, token);
  } catch (error) {
    const weatherApiError = error.response?.data?.error?.message;
    if (weatherApiError?.includes("No matching location found")) {
      throw new Error("Invalid city name.");
    }
    throw new Error(error.message || "Subscription failed.");
  }
};

export const confirmSubscription = async (token) => {
  const data = verifyToken(token);
  if (!data) {
    throw new Error("Invalid or expired token");
  }
  const { email } = data;
  const subscription = await Subscription.findOne({ email });
  if (!subscription) {
    throw new Error("Subscription not found");
  }
  subscription.confirmed = true;
  await subscription.save();
};

export const unsubscribeUser = async (token) => {
  const data = verifyToken(token);
  if (!data) {
    throw new Error("Invalid or expired token");
  }
  const { email, city } = data;
  const subscription = await Subscription.findOne({ email, city });
  if (!subscription) {
    throw new Error("Subscription not found");
  }
  await Subscription.deleteOne({ email, city });
};
