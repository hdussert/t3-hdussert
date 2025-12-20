import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const SectionTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn("mb-5 font-display text-3xl", className)} {...props}>
      {children}
    </h2>
  );
};

export default SectionTitle;
