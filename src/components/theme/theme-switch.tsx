"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Switch } from "~/components/ui/switch";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // SSR-safe

  const handleSwitch = (checked: boolean) => {
    const next = checked ? "dark" : "light";
    setTheme(next);
  };

  return (
    <Switch
      className="absolute right-4 top-4 z-20"
      iconUnchecked={<SunIcon />}
      iconChecked={<MoonIcon />}
      checked={theme === "dark"}
      onCheckedChange={handleSwitch}
    />
  );
}
