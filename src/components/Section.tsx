import { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const Section = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <section
      className={cn("max-w-screen-lg border-y p-4", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
