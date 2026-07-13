// frontend/src/components/sections/Work.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";

export function Work() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-card", {
        y: 60,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: container.current, start: "top 75%" },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} id="work" className="px-6 py-24 md:px-12">
      <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">Selected Work</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card group"
          >
            <Card className="h-full transition-colors group-hover:border-accent/50">
              <div className="flex items-start justify-between">
                <CardTitle>{project.title}</CardTitle>
                <ArrowUpRight
                  className="size-5 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <CardDescription className="mt-3">{project.description}</CardDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
