// backend/src/schemas/contact.ts
import { z } from "zod";

const CONTROL_CHARS = /\p{Cc}/gu;
const HTML_TAGS = /<[^>]*>/g;

const sanitize = (v: string) => v.replace(CONTROL_CHARS, "").replace(HTML_TAGS, "").trim();

export const contactSchema = z.object({
  name: z.string().min(2).max(100).transform(sanitize),
  email: z.string().email().max(254).toLowerCase().trim(),
  subject: z.string().min(3).max(150).transform(sanitize),
  message: z.string().min(10).max(3000).transform(sanitize),
  // Honeypot: bots fill it, humans never see it.
  website: z.literal("").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
