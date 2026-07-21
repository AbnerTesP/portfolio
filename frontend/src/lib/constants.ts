// frontend/src/lib/constants.ts
export const PROFILE = {
  name: "Abner Gonçalves",
  role: "Full-Stack Developer",
  email: "abnergt2003@gmail.com",
  phone: "+351 932606960",
  github: "https://github.com/AbnerTesP",
  location: "Portugal",
} as const;

export const PROJECTS = [
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time metrics platform with React, WebSockets and PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "https://github.com/AbnerTesP",
  },
  {
    title: "E-commerce API",
    description: "Secure REST API with payments, auth and rate limiting.",
    tags: ["Express", "Stripe", "Redis"],
    href: "https://github.com/AbnerTesP",
  },
  {
    title: "Design System",
    description: "Accessible component library with tokens and dark mode.",
    tags: ["TypeScript", "Tailwind", "Storybook"],
    href: "https://github.com/AbnerTesP",
  },
  {
    title: "DevOps Automation",
    description: "CI/CD pipelines and infrastructure as code for web apps.",
    tags: ["Docker", "GitHub Actions", "AWS"],
    href: "https://github.com/AbnerTesP",
  },
  {
    title: "Machine Repair Management System",
    description: "Internal CMMS for a machine repair company — service orders, maintenance history and parts tracking.",
    tags: ["JavaScript", "Node.js", "MySQL"],
    href: "https://github.com/AbnerTesP",
  },
] as const;

export const SERVICES = [
  { title: "Web Development", description: "Fast, accessible and SEO-friendly web apps built with modern React." },
  { title: "API & Backend", description: "Secure Node.js APIs with strict validation, auth and observability." },
  { title: "UI Engineering", description: "Design systems, animations and pixel-perfect interfaces." },
  { title: "Performance & Security Audits", description: "Core Web Vitals, OWASP hardening and dependency hygiene." },
] as const;
