import nodemailer from "nodemailer";
import type { Inquiry } from "./schema";

function getMailConfig() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !MAIL_FROM ||
    !MAIL_TO
  ) {
    throw new Error("SMTP environment variables are incomplete.");
  }

  return {
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    from: MAIL_FROM,
    to: MAIL_TO,
  };
}

type Attachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export async function sendInquiryEmails(
  inquiry: Inquiry,
  attachment?: Attachment,
) {
  const config = getMailConfig();
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  const details = Object.entries(inquiry)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return Promise.allSettled([
    transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: inquiry.email,
      subject: `Manufacturing inquiry: ${inquiry.companyName}`,
      text: details,
      attachments: attachment ? [attachment] : undefined,
    }),
    transporter.sendMail({
      from: config.from,
      to: inquiry.email,
      subject: "EVIA Labs manufacturing inquiry",
      text: `Hello ${inquiry.fullName},\n\nWe received your manufacturing inquiry.\n\nEVIA Labs`,
    }),
  ]);
}
