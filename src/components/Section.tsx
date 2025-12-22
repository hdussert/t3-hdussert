import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const Section = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <section
      className={cn("max-w-screen-lg border-y px-4 py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
