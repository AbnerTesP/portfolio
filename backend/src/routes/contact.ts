// backend/src/routes/contact.ts
import { Router, type Request, type Response } from "express";
import { contactSchema } from "../schemas/contact.js";
import { contactLimiter } from "../middleware/security.js";

export const contactRouter = Router();

contactRouter.post("/", contactLimiter, async (req: Request, res: Response) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Validation failed",
      issues: parsed.error.issues.map((i) => ({ field: i.path.join("."), message: i.message })),
    });
    return;
  }

  // Honeypot triggered → pretend success, drop silently.
  if (req.body?.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const { name, email, subject, message } = parsed.data;

  // Plug your mail provider here (Resend, SES, Nodemailer via SMTP).
  console.info(`[contact] ${name} <${email}> — ${subject}: ${message.slice(0, 80)}`);

  res.status(200).json({ ok: true });
});
