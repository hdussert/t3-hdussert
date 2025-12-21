import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const SectionTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn("font-display mb-5 text-3xl", className)} {...props}>
      {children}
    </h2>
  );
};

export default SectionTitle;
