// frontend/src/components/ui/icon-badge.tsx
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({ icon: Icon, className, iconClassName }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent",
        className,
      )}
    >
      <Icon className={cn("size-5", iconClassName)} aria-hidden="true" />
    </span>
  );
}
