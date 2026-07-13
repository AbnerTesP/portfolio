// frontend/src/components/sections/About.tsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { animate, svg, stagger } from "animejs";
import { Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/constants";

export function About() {
  const container = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".about-badge", { y: 24, autoAlpha: 0, duration: 0.5 })
        .from(".about-title", { y: 48, autoAlpha: 0, duration: 0.8 }, "-=0.2")
        .from(".about-copy", { y: 32, autoAlpha: 0, duration: 0.6 }, "-=0.4")
        .from(".about-cta", { y: 24, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");
    },
    { scope: container },
  );

  useEffect(() => {
    if (!svgRef.current) return;
    const animation = animate(svg.createDrawable(svgRef.current.querySelectorAll("path")), {
      draw: ["0 0", "0 1"],
      ease: "inOutQuad",
      duration: 2200,
      delay: stagger(180),
    });
    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <section ref={container} id="about" className="relative flex min-h-svh flex-col justify-center px-6 py-24 md:px-12">
      <svg
        ref={svgRef}
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute right-0 top-1/2 hidden w-1/3 -translate-y-1/2 stroke-accent/20 lg:block"
        fill="none"
        strokeWidth="2"
      >
        <path d="M40 200 C40 110 110 40 200 40 S360 110 360 200 290 360 200 360 40 290 40 200Z" />
        <path d="M100 200 C100 145 145 100 200 100 S300 145 300 200 255 300 200 300 100 255 100 200Z" />
        <path d="M160 200 C160 178 178 160 200 160 S240 178 240 200 222 240 200 240 160 222 160 200Z" />
      </svg>

      <span className="about-badge mb-6 w-fit rounded-full border border-border bg-surface px-4 py-1.5 text-xs uppercase tracking-widest text-muted">
        {PROFILE.role} · {PROFILE.location}
      </span>
      <h1 className="about-title max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
        Hi, I'm {PROFILE.name.split(" ")[0]}. I build secure, animated web experiences.
      </h1>
      <p className="about-copy mt-6 max-w-xl text-lg text-muted">
        Full-stack developer specialized in TypeScript, React and Node.js — with a focus on
        security-first APIs and motion-rich interfaces.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="about-cta">
          <Button size="lg">
            <Github className="size-5" aria-hidden="true" />
            View my GitHub
          </Button>
        </a>
        <a href="#work" className="about-cta">
          <Button variant="outline" size="lg">
            Selected work
            <ArrowDown className="size-4" aria-hidden="true" />
          </Button>
        </a>
      </div>
    </section>
  );
}
