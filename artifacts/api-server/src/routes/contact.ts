import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router: IRouter = Router();
const MAIL_TO = process.env["MAIL_TO"] || "dgn.ugur@gmail.com";

type ContactBody = {
  fullName?: unknown;
  email?: unknown;
  company?: unknown;
  position?: unknown;
  phone?: unknown;
  familyMember?: unknown;
  shareholder?: unknown;
  generation?: unknown;
  message?: unknown;
};

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[char]!);

router.post("/contact", async (req, res) => {
  const body = (req.body || {}) as ContactBody;
  const fullName = text(body.fullName, 120);
  const email = text(body.email, 254);

  if (fullName.length < 2 || !/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ message: "Geçerli ad soyad ve e-posta adresi gereklidir." });
    return;
  }

  const smtpUser = process.env["SMTP_USER"];
  const smtpPass = process.env["SMTP_PASS"];
  if (!smtpUser || !smtpPass) {
    logger.error("SMTP_USER or SMTP_PASS is not configured");
    res.status(503).json({ message: "E-posta servisi henüz yapılandırılmadı." });
    return;
  }

  const fields = {
    "Ad Soyad": fullName,
    "E-posta": email,
    "Şirket": text(body.company, 160),
    "Pozisyon": text(body.position, 160),
    "Telefon": text(body.phone, 60),
    "Aile Üyesi": text(body.familyMember, 20),
    "Hissedar": text(body.shareholder, 20),
    "Nesil": text(body.generation, 80),
    "Mesaj": text(body.message, 5000),
  };

  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd;vertical-align:top">${label}</th><td style="padding:8px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
    .join("");

  try {
    const port = Number(process.env["SMTP_PORT"] || 465);
    const transporter = nodemailer.createTransport({
      host: process.env["SMTP_HOST"] || "smtp.gmail.com",
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: process.env["SMTP_FROM"] || smtpUser,
      to: MAIL_TO,
      replyTo: email,
      subject: `Web sitesi iletişim formu: ${fullName}`,
      text: Object.entries(fields).filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `<h2>Yeni iletişim formu mesajı</h2><table style="border-collapse:collapse">${rows}</table>`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    logger.error({ err: error }, "Contact email could not be sent");
    res.status(502).json({ message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." });
  }
});

export default router;
