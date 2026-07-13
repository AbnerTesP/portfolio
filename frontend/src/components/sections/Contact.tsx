// frontend/src/components/sections/Contact.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { IconBadge } from "@/components/ui/icon-badge";
import { useContactForm } from "@/hooks/useContactForm";
import { PROFILE } from "@/lib/constants";

const CHANNELS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
  { icon: Github, label: "GitHub", value: "@AbnerTesP", href: PROFILE.github },
] as const;

export function Contact() {
  const container = useRef<HTMLElement>(null);
  const { status, errors, submit } = useContactForm();

  useGSAP(
    () => {
      gsap.from(".contact-item", {
        x: -40,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: container.current, start: "top 75%" },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} id="contact" className="px-6 py-24 md:px-12">
      <h2 className="contact-item mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        Got questions?
      </h2>
      <p className="contact-item mb-12 max-w-md text-muted">
        Let's talk about your next project. Reach me through any channel below.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          {CHANNELS.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-item group flex items-center gap-4 rounded-card border border-border bg-card p-5 transition-colors hover:border-accent/50"
            >
              <IconBadge icon={icon} />
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted">{label}</span>
                <span className="font-medium group-hover:text-accent">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <Card className="contact-item">
          <form onSubmit={submit} noValidate className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField name="name" placeholder="Your name" autoComplete="name" error={errors["name"]} />
              <FormField name="email" type="email" placeholder="Your email" autoComplete="email" error={errors["email"]} />
            </div>
            <FormField name="subject" placeholder="Subject" error={errors["subject"]} />
            <FormField as="textarea" name="message" placeholder="Your message" error={errors["message"]} />
            {/* Honeypot — hidden from humans, visible to bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] size-px opacity-0"
            />
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
            {status === "success" && (
              <p role="status" className="text-sm text-accent">Message sent — I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
