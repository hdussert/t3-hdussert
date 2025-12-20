import type { ExperienceData } from "./experience-type";

const EXPERIENCES: ExperienceData[] = [
  {
    date: "Juil. 2022 - Juin 2024",
    title: "Software Engineer",
    company: "Dalma",
    link: "https://www.dalma.co/",
    location: "Full remote",
    tags: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind.css",
      "AWS",
      "Webflow",
    ],
    description: [
      "Développement d'applications web et mobile",
      "Conception de services backend (APIs, fonctions serverless) ",
      "Amélioration du support technique (process, documentation, outillage)",
      "Contribution aux bonnes pratiques frontend et backend (peer review, chapters)",
      "Analyse d'incidents et rédaction de post-mortems",
    ],
  },
  {
    date: "Déc. 2020 - Juin 2021",
    title: "Développeur Backend",
    company: "WeProov",
    link: "https://weproov.com",
    location: "Full remote",
    tags: ["Go", "AWS", "Postman"],
    description: [
      "Conception et maintenance de services backend serverless",
      "Maintenance évolutive : refactoring et optimisation des performances",
      "Création et maintenance de tests d'intégration (Postman)",
    ],
  },
  {
    date: "Juin 2020 - Nov. 2020",
    title: "Développeur Frontend",
    company: "Placeloop",
    link: "https://www.placeloop.com",
    location: "Paris",
    tags: ["React", "AngularJS", "Sass"],
    description: [
      "Migration technique d'une application Angular vers React",
      "Refonte de l'interface utilisateur et mise en place d'un design system",
      "Développement de nouvelles fonctionnalités frontend",
      "Participation à la gestion de projet et à l'animation des sprints",
    ],
  },
] as const;

export default EXPERIENCES;
