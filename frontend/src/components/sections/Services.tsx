// frontend/src/components/sections/Services.tsx
import { useRef, useEffect } from "react";
import { animate, stagger, onScroll } from "animejs";
import { Code2, Server, Palette, ShieldCheck } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { IconBadge } from "@/components/ui/icon-badge";
import { SERVICES } from "@/lib/constants";

const ICONS = [Code2, Server, Palette, ShieldCheck] as const;

export function Services() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const animation = animate(container.current.querySelectorAll(".service-card"), {
      translateY: [40, 0],
      opacity: [0, 1],
      ease: "outCubic",
      duration: 700,
      delay: stagger(120),
      autoplay: onScroll({
        target: container.current,
        enter: "bottom-=100 top",
      }),
    });
    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <section ref={container} id="services" className="px-6 py-24 md:px-12">
      <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[i % ICONS.length] ?? Code2;
          return (
            <Card key={service.title} className="service-card opacity-0">
              <IconBadge icon={Icon} className="mb-5" iconClassName="size-6" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="mt-3">{service.description}</CardDescription>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
