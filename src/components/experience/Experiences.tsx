import SectionTitle from "~/components/SectionTitle";
import Experience from "./Experience";
import EXPERIENCES from "./experience-data";

const Experiences = () => {
  return (
    <div>
      <SectionTitle className="sm:w-72 sm:px-4 sm:text-right">
        Expériences
      </SectionTitle>
      {EXPERIENCES.map((experience) => (
        <Experience key={experience.company} {...experience} />
      ))}
    </div>
  );
};

export default Experiences;
