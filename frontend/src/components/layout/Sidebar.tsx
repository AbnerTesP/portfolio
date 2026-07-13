// frontend/src/components/layout/Sidebar.tsx
import { Github, User, Briefcase, Wrench, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/lib/constants";

const NAV = [
  { href: "#about", label: "About", icon: User },
  { href: "#work", label: "Selected Work", icon: Briefcase },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#contact", label: "Contact", icon: Send },
] as const;

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border bg-surface p-6 lg:flex">
      <a href="#about" className="mb-10 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent font-bold text-accent-foreground">
          {PROFILE.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{PROFILE.name}</span>
          <span className="block text-xs text-muted">{PROFILE.role}</span>
        </span>
      </a>

      <nav aria-label="Main navigation" className="flex flex-1 flex-col gap-1">
        {NAV.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-muted transition-colors",
              "hover:bg-card hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>

      <a
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
      >
        <Github className="size-4" aria-hidden="true" />
        GitHub
      </a>
    </aside>
  );
}
