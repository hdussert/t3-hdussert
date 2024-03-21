"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // Rest of your component
  return (
    <Switch
      className="absolute right-4 top-4 z-10"
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
