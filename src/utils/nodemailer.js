import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendConfirmationEmail = async (email, token) => {
  const url = `${process.env.BASE_URL}/api/confirm/${token}`;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Confirm your weather subscription",
    html: `<p>Click to confirm: <a href="${url}">${url}</a></p>`,
  });
};
