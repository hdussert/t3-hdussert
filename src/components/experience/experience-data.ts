import type { ExperienceData } from "./experience-type";

const EXPERIENCES: ExperienceData[] = [
  {
    date: "Juil. 2022 - Juin 2025",
    title: "Software Engineer",
    company: "Dalma",
    link: "https://www.dalma.co/",
    location: "Full remote",
    tags: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "AWS",
      "Webflow",
    ],
    description: [
      "Refonte de l'espace client web : migration vers TypeScript, nouveau design system",
      "Reprise de l'application mobile React Native, initialement développée par des externes",
      "Création de nouvelles fonctionnalités mobiles, notamment les parcours de contenu gamifié",
      "Expansion vers l'Allemagne: développement du nouveau flow de souscription allemand, adaptation de l'application",
      "Mise en place des sites Marketing avec Webflow",
      "Amélioration du support technique : documentation des process, outils internes Retool et évolution de l'organisation pour faciliter le traitement des demandes",
      "Développement de services backend et APIs : API d'authentification et API pour le service de visio lors du déploiement en Allemagne",
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
