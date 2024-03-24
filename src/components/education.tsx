import { cn } from "~/lib/utils";

type EducationProps = {
  title: string;
  date: string;
  school: string;
};

export const Education = ({ title, date, school }: EducationProps) => {
  return (
    <div className={cn("flex items-center justify-between")}>
      <p className={cn("flex-1")}>{school}</p>
      <p className={cn("hidden flex-1 text-center sm:inline")}>{title}</p>
      <p className={cn("flex-1 text-end")}>{date}</p>
    </div>
  );
};
