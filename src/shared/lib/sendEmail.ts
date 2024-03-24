import "server-only";

import nodemailer from "nodemailer";
import { smtpOptions } from "../config/nodemailer.config";

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(data: SendEmailParams) {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  });
}
