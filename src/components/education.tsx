type EducationProps = {
  title: string;
  date: string;
  school: string;
};

export const Education = ({ title, date, school }: EducationProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="flex-1">{school}</p>
      <p className="hidden flex-1 text-center sm:inline">{title}</p>
      <p className="flex-1 text-end">{date}</p>
    </div>
  );
};
