// frontend/src/components/ui/input.tsx
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const fieldClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(fieldClasses, "min-h-32 resize-y", className)} {...props} />;
}
