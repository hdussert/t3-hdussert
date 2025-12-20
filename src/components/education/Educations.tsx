import SectionTitle from "~/components/SectionTitle";
import Education from "./Education";
import EDUCATIONS from "./education-data";

const Educations = () => {
  return (
    <div>
      <SectionTitle className="sm:w-72 sm:px-4 sm:text-right">
        Formations
      </SectionTitle>
      <div className="no-scrollbar flex w-full flex-col overflow-y-scroll">
        {EDUCATIONS.map((education, i) => (
          <Education key={i} {...education} />
        ))}
      </div>
    </div>
  );
};

export default Educations;
