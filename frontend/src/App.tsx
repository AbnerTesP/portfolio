// frontend/src/App.tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { PROFILE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  return (
    <div className="min-h-svh">
      <ThemeToggle />
      <Sidebar />
      <main className="lg:pl-64">
        <About />
        <Work />
        <Services />
        <Contact />
        <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted md:px-12">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React, GSAP & Anime.js.
        </footer>
      </main>
    </div>
  );
}
