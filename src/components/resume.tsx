import { Fragment } from "react";
import { Education } from "~/components/education";
import { Experience } from "~/components/experience";
import { cn } from "~/lib/utils";

const experiences = [
  {
    titre: "Développeur FullStack",
    date: "Juil. 2022 - Fév. 2024",
    location: "Full remote",
    entreprise: "Dalma",
    entrepriseLogoRef: "/assets/dalma.svg",
    tags: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind.css",
      "Environnement AWS",
      "Webflow",
    ],
    description: (
      <>
        <p>
          Dalma est une mutuelle pour animaux de compagnie.
          <br />
          C&apos;est une startup organisée squad agiles pluridisciplinaires.
          <br />
          <br />
        </p>
        <p>Mes missions :</p>
        <ul className={cn("ml-6 list-disc ")}>
          <li>Conception et développement d&apos;applications web et mobile</li>
          <li>
            Conception et développement de services backend (APIs, lambdas...)
          </li>
          <li>
            Amélioration du support technique (mise en place de process,
            outillage, documentation, formation)
          </li>
          <li>
            Contribution aux chapters backend et frontend (process,
            documentation, peer review)
          </li>
          <li>Analyse de l&apos;impact des bugs, post-mortems</li>
        </ul>
        <br />
        <p>J&apos;ai pu y cultiver d&apos;excellents softskills:</p>
        <ul className={cn("ml-6 list-disc")}>
          <li>communication</li>
          <li>proactivité</li>
          <li>curiosité</li>
          <li>adaptation</li>
          <li>force de proposition</li>
        </ul>
        <br />
      </>
    ),
  },
  {
    titre: "Développeur Backend",
    date: "Déc. 2020 - Juin 2021",
    location: "Full remote",
    entreprise: "WeProov",
    entrepriseLogoRef: "/assets/placeloop.svg",
    tags: ["Go", "Environnement AWS", "Postman"],
    description: (
      <>
        <p>
          Weproov est une startup dans le secteur assurantiel automobile. <br />
          <br />
          Mes missions:
        </p>
        <ul className={cn("ml-6 list-disc")}>
          <li>
            Conception, développement et maintient de services backend (Lambdas,
            API Gateway, SQS)
          </li>
          <li>
            Maintenance et évolution de l&apos;existant (refactoring,
            optimisation)
          </li>
          <li>Création de collections de tests d&apos;intégration (Postman)</li>
        </ul>
        <br />
      </>
    ),
  },
  {
    titre: "Développeur Frontend",
    date: "Juin 2020 - Nov. 2020",
    location: "Paris",
    entreprise: "Placeloop",
    entrepriseLogoRef: "/assets/placeloop.svg",
    tags: ["React", "AngularJS", "Jira"],
    description: (
      <>
        <p>
          Placeloop est une startup spécialisée dans le marketing digital.
          <br />
          <br />
          Au sein d&apos;une jeune équipe constituée de 6 stagiaires et 1 CTO,
          <br />
          j&apos;ai eu l&apos;opportunité de m&apos;initier à la gestion de
          projet et au management.
          <br />
          <br />
          Mes missions:
        </p>
        <ul className={cn("ml-6 list-disc")}>
          <li>Migration technique Angular vers un React</li>
          <li>Refonte graphique, mise en place d&apos;un design system</li>
          <li>Conception et développement de nouvelles fonctionnalités </li>
          <li>Analyse de parcours utilisateurs, conception de solutions UX</li>
          <li>Animation des Sprints, gestion tickets de l&apos;équipe front</li>
        </ul>
      </>
    ),
  },
];

const educations = [
  {
    title: "Architecte du numérique",
    date: "2018 - 2022",
    school: "École 42",
    schoolLogoRef: "/assets/42.svg",
    tags: ["C", "Shell", "OpenGL"],
  },
  {
    title: "Junior Game programmer",
    date: "Juil. - Août 2021",
    school: "Unity",
    schoolLogoRef: "/assets/unity.svg",
    tags: ["C#", "Unity", "Blender"],
  },
  {
    title: "L1 & L2 Informatique",
    date: "2015 - 2018",
    school: "Faculté de Sciences",
    schoolLogoRef: "/assets/42.svg",
    tags: ["C++", "Python", "SQL", "Misc"],
  },
];

export const Resume = () => {
  return (
    <div
      className={cn(
        "mx-auto mb-24 flex max-w-screen-lg flex-col gap-6 px-2 sm:px-6",
      )}
    >
      <h2 className={cn("mt-6 font-display text-3xl")} id="experiences">
        Expériences
      </h2>
      {experiences.map((experience) => (
        <Experience key={experience.entreprise} {...experience} />
      ))}
      <h2 className={cn("mt-6 font-display text-3xl")}>Formations</h2>
      <div
        className={cn(
          "no-scrollbar flex w-full flex-col gap-4 overflow-y-scroll",
        )}
      >
        {educations.map((education, i) => (
          <Fragment key={education.school}>
            {i === educations.length - 1 ? null : <hr />}
            <Education {...education} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
