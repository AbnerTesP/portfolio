// frontend/src/hooks/useTheme.ts
import { useSyncExternalStore, useCallback } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
  for (const notify of listeners) notify();
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme);
  const toggle = useCallback(() => setTheme(getTheme() === "dark" ? "light" : "dark"), []);
  return { theme, toggle };
}
