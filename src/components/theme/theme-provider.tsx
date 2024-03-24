"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isClient = typeof window !== "undefined";
  const isInIframe = isClient && window.self !== window.top;
  const localStorageTheme = isClient ? localStorage.getItem("theme") : null;
  const [iframeTheme, setIframeTheme] = useState(
    localStorageTheme === "dark" ? "light" : "dark",
  );

  useEffect(() => {
    if (!isInIframe) {
      return;
    }

    const handleThemeStorageChange = () => {
      const theme = localStorage.getItem("theme");
      if (theme) {
        setIframeTheme(theme === "dark" ? "light" : "dark");
      }
    };

    handleThemeStorageChange();
    window.addEventListener("storage", handleThemeStorageChange);
    return () => {
      window.removeEventListener("storage", handleThemeStorageChange);
    };
  }, [isInIframe]);

  return (
    <NextThemesProvider
      {...props}
      forcedTheme={isInIframe ? iframeTheme : undefined}
    >
      {children}
    </NextThemesProvider>
  );
}
