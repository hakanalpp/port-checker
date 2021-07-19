import { createTransport } from "nodemailer";

import { getDate } from "../helpers/dateHelper.js";

export const sendMail = async (message) => {
  console.log(`Sending the email with the following message: ${message}`);
  try {
    const transporter = createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: process.env.SUBJECT,
      text: message
    });
    console.log(`Email successfully sent.`);
  } catch (err) {
    console.log(`${err}`);
  }
};
