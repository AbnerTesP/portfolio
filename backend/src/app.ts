// backend/src/app.ts
import express, { type NextFunction, type Request, type Response } from "express";
import { securityHeaders, corsPolicy, globalLimiter } from "./middleware/security.js";
import { contactRouter } from "./routes/contact.js";
import { isProd } from "./config/env.js";

export const app = express();

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(securityHeaders);
app.use(corsPolicy);
app.use(globalLimiter);
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (!isProd) console.error(err);
  res.status(500).json({ error: "Internal server error" });
});
