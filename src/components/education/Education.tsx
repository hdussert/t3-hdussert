import type { EducationData } from "./education-types";

type EducationProps = EducationData;

const Education = ({ title, date, school }: EducationProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-1  flex-col border-r p-4 text-right sm:max-w-72">
        <p className="whitespace-nowrap  font-display uppercase text-muted-foreground">
          {date}
        </p>
      </div>
      <div className="flex-1 p-4">
        <p className="font-display text-xl">{school}</p>
        <p className="hidden flex-1 text-center sm:inline">{title}</p>
      </div>
    </div>
  );
};

export default Education;
