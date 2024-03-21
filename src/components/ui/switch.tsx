"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "~/lib/utils";

type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  iconChecked?: React.ReactNode;
  iconUnchecked?: React.ReactNode;
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, iconUnchecked, iconChecked, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    >
      <div
        data-state={props.checked ? "checked" : "unchecked"}
        className={cn(
          "data-[state=checked]:visible data-[state=unchecked]:hidden",
        )}
      >
        {iconChecked}
      </div>
      <div
        data-state={props.checked ? "checked" : "unchecked"}
        className={cn(
          "data-[state=unchecked]:visible data-[state=checked]:hidden",
        )}
      >
        {iconUnchecked}
      </div>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
