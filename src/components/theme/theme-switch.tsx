"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Switch } from "../ui/switch";

export function ThemeSwitch() {
  const { setTheme: setThemeNext, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const setTheme = (newTheme: "light" | "dark") => {
    setThemeNext(newTheme);

    // Sync theme between iframe and parent
    const oldTheme = newTheme === "light" ? "dark" : "light";
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "theme",
        oldValue: oldTheme,
        newValue: newTheme,
      }),
    );
  };

  return (
    <Switch
      className={cn("absolute right-4 top-4 z-10")}
      iconUnchecked={<SunIcon />}
      iconChecked={<MoonIcon />}
      defaultChecked={resolvedTheme === "dark"}
      checked={resolvedTheme === "dark"}
      onCheckedChange={(checked) => {
        if (checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    />
  );
}
