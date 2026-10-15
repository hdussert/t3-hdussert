import type { ProjectData } from "~/components/project/project-types";

const PROJECTS: ProjectData[] = [
  {
    title: "What Box",
    description:
      "Listez le contenu de vos boîtes de rangement, imprimez leur une étiquette QR code, puis retrouvez n'importe quel objet en un instant.",
    url: "https://whatbox.hdussert.com/",
  },
  {
    title: "Chez Lyno",
    description:
      "Réalisé avec amour pour mon camion à Pizza préféré, présente le menu, les emplacements et les horaires d'ouverture. ",
    url: "https://chez-lyno-pizza.vercel.app/",
  },
  {
    title: "Les Héspérides",
    description:
      "Site de réservation une chambre d'hôtes à Noirmoutier. Design par Anne-Cécile Gohier",
    url: "https://les-hesperides-noirmoutier.vercel.app/",
  },
  {
    title: "Bingo!",
    description:
      "Un bingo à jouer entre amis sur téléphone : devinez ce qui va se passer pendant une soirée ou un voyage, puis cochez-le quand ça arrive.",
    url: "https://bingo.hdussert.com/",
  },
] as const;

export default PROJECTS;
