import type { ProjectData } from "~/components/project/project-types";

const PROJECTS: ProjectData[] = [
  {
    title: "What Box",
    description:
      "(WIP) Application permettant d'inventorier et gérer ses boîtes de rangement à l'aide de QR codes. (nécessite un compte)",
    url: "https://what-box.vercel.app/",
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
] as const;

export default PROJECTS;
