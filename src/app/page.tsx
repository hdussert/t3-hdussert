import { unstable_noStore as noStore } from "next/cache";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";

export default function Home() {
  noStore();

  return (
    <main className="m-auto max-w-screen-lg">
      <Hero />
      <Experience
        titre="Développeur FullStack"
        date="Juillet 2022 - Février 2024"
        entreprise="Dalma"
        entrepriseLogoRef="/assets/dalma.svg"
        tags={[
          "React",
          "React Native",
          "Next.js",
          "Tailwind.css",
          "Environnement AWS",
          "Webflow",
        ]}
        description={
          <>
            <p>
              Dalma est une startup évoluant dans le secteur assurantiel,
              c&apos;est une mutuelle pour animaux de compagnie.
              <br />
              Organisée en de multiple équipes agiles pluridisciplinaires, en
              télétravail complet.
              <br />
              <br />
              Cet environnement m&apos;a permit de cultivier d&apos;excellents
              softskills:
            </p>
            <ul className="ml-6 list-disc">
              <li>communication</li>
              <li>proactivité</li>
              <li>curiosité</li>
              <li>implication</li>
              <li>autonomie</li>
              <li>adaptation</li>
              <li>force de proposition</li>
            </ul>
            <br />
            <p>
              J&apos;ai eu la chance de contribuer à différents niveaux sur de
              nombreux projets :
            </p>
            <ul className="ml-6 list-disc ">
              <li>
                Conception et développement d&apos;applications (web, mobile)
              </li>
              <li>
                Conception et développement de services backend (APIs,
                microservices, serverless)
              </li>
              <li>
                Mise en place de processus pour le support technique (outillage,
                documentation, formation)
              </li>
              <li>
                Maintenance et évolution de l&apos;existant (refactoring,
                optimisation)
              </li>
              <li>
                Contribution aux processus et guidelines de l&apos;équipe
                frontend (documentation, peer review)
              </li>
              <li>Analyse poussée de l&apos;impact des bugs, post-mortems</li>
              <li>Proactivité dans les réunions de conception technique</li>
            </ul>
          </>
        }
      />
      <Experience
        titre="Développeur Backend"
        date="Décembre 2020 - Juin 2021"
        entreprise="WeProov"
        entrepriseLogoRef="/assets/placeloop.svg"
        tags={["Go", "Environnement AWS", "Postman"]}
        description={
          <>
            <p>
              WeProov est une startup évoluant de le secteur assurentiel
              automobile. <br />
              Mettant à disposition une application de gestion flotte et de
              sinistres.
              <br />
              au sein d&apos;équipes agiles pluridisciplinaires en constante
              évolution.
              <br />
              <br />
              Cet environnement m&apos;a permit de cultivier d&apos;excellents
              softskills:
            </p>
            <ul className="ml-6 list-disc">
              <li>
                Conception, développement et maintient de services backend
                (Lambdas, API Gateway, SQS)
              </li>
              <li>
                Maintenance et évolution de l&apos;existant (refactoring,
                optimisation)
              </li>
              <li>
                Création de collections de tests d&apos;intégration (Postman)
              </li>
            </ul>
            <br />
          </>
        }
      />
      <Experience
        titre="Développeur Frontend"
        date="Décembre 2020 - Juin 2021"
        entreprise="Placeloop"
        entrepriseLogoRef="/assets/placeloop.svg"
        tags={["React", "AngularJS", "Jira"]}
        description={
          <>
            <p>
              Placeloop est une startup spécialisée dans le marketing digital.
              <br />
              <br />
              Au sein d&apos;une jeune équipe constituée de 6 stagiaires et 1
              CTO,
              <br />
              j&apos;ai eu l&apos;opportunité de m&apos;initier à la gestion de
              projet et au management.
              <br />
              <br />
              Mes missions:
            </p>
            <ul className="ml-6 list-disc ">
              <li>Migration technique Angular vers un React</li>
              <li>Refonte graphique, mise en place d&apos;un design system</li>
              <li>Conception et développement de nouvelles fonctionnalités </li>
              <li>
                Analyse de parcours utilisateurs, conception de solutions UX
              </li>
              <li>
                Animation des Sprints, gestion tickets de l&apos;équipe front
              </li>
            </ul>
          </>
        }
      />
      <h2 className="mt-12 font-display text-3xl">Formations</h2>
      <Experience
        titre="Architecte du numérique"
        date="2018 - 2022"
        entreprise="École 42"
        entrepriseLogoRef="/assets/42.svg"
        tags={["C", "Shell", "OpenGL"]}
        description={<></>}
      />
      <Experience
        titre="Junior Game programmer"
        date="Juin 2021 - Aout 2021"
        entreprise="Unity"
        entrepriseLogoRef="/assets/unity.svg"
        tags={["C#", "Unity", "Blender"]}
        description={<></>}
      />
      <Experience
        titre="License Informatique - L1, L2"
        date="2015 - 2018"
        entreprise="Faculté de Sciences"
        entrepriseLogoRef="/assets/42.svg"
        tags={["C++", "Python", "SQL", "Misc"]}
        description={<></>}
      />
    </main>
  );
}
