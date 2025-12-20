import { Educations } from "~/components/education";
import { Experiences } from "~/components/experience";
import Section from "~/components/Section";

const Resume = () => {
  return (
    <Section className="flex min-h-screen w-full flex-col justify-center gap-8">
      <Experiences />
      <Educations />
    </Section>
  );
};

export default Resume;
