import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const SectionTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn("font-display mb-8 text-3xl sm:mb-12", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
