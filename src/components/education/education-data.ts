import type { EducationData } from "./education-types";

const EDUCATIONS: EducationData[] = [
  {
    title: "Architecte du numérique",
    date: "2018 - 2022",
    school: "École 42",
  },
  {
    title: "Junior programmer",
    date: "Juil. - Août 2021",
    school: "Unity",
  },
  {
    title: "L1 & L2 Informatique",
    date: "2015 - 2018",
    school: "Faculté de Sciences",
  },
] as const;

export default EDUCATIONS;
