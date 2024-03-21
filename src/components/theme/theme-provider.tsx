"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const iframeTheme =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("theme")
      : undefined;
  return (
    <NextThemesProvider {...props} forcedTheme={iframeTheme ?? undefined}>
      {children}
    </NextThemesProvider>
  );
}
