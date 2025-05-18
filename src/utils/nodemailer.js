import nodemailer from "nodemailer";

import { baseUrl, smtpPass, smtpUser } from "./config.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export const sendConfirmationEmail = async (email, token) => {
  const url = `${baseUrl}/confirm/${token}`;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Confirm your weather subscription",
    html: `<p>Click to confirm: <a href="${url}">${url}</a></p>`,
  });
};
