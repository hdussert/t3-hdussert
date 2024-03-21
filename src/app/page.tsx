import { unstable_noStore as noStore } from "next/cache";
import { Education } from "~/components/education";
import { Experience } from "~/components/experience";
import { Hero } from "~/components/hero";
import { cn } from "~/lib/utils";

export default function Home() {
  noStore();

  return (
    <main>
      <Hero />
      <div className={cn("m-auto flex max-w-screen-lg flex-col gap-6 px-6")}>
        <h2 className="mt-6 font-display text-3xl">Expériences</h2>
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
                Startup dans le secteur assurantiel, mutuelle pour animaux de
                compagnie.
                <br />
                Organisée squad agiles pluridisciplinaires, en télétravail
                complet.
                <br />
                <br />
                J&apos;ai pu y cultiver d&apos;excellents softskills:
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
                J&apos;ai contribué à différents niveaux sur plusieurs projets :
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
                  Amélioration du support technique (processus, outillage,
                  documentation, formation)
                </li>
                <li>
                  Contribution aux chapters backend et frontend (process,
                  documentation, peer review, souder l&apos;équipe)
                </li>
                <li>Analyse de l&apos;impact des bugs, post-mortems</li>
                <li>Conception technique en amont</li>
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
                Startup dans le secteur assurantiel automobile. <br />
                <br />
                Mes missions:
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
                Startup spécialisée dans le marketing digital.
                <br />
                <br />
                Au sein d&apos;une jeune équipe constituée de 6 stagiaires et 1
                CTO,
                <br />
                j&apos;ai eu l&apos;opportunité de m&apos;initier à la gestion
                de projet et au management.
                <br />
                <br />
                Mes missions:
              </p>
              <ul className="ml-6 list-disc ">
                <li>Migration technique Angular vers un React</li>
                <li>
                  Refonte graphique, mise en place d&apos;un design system
                </li>
                <li>
                  Conception et développement de nouvelles fonctionnalités{" "}
                </li>
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

        <h2 className="mt-6 font-display text-3xl">Formations</h2>
        <div className={cn("flex gap-6")}>
          <Education
            title="Architecte du numérique"
            date="2018 - 2022"
            school="École 42"
            schoolLogoRef="/assets/42.svg"
            tags={["C", "Shell", "OpenGL"]}
          />
          <Education
            title="Junior Game programmer"
            date="Juin 2021 - Aout 2021"
            school="Unity"
            schoolLogoRef="/assets/unity.svg"
            tags={["C#", "Unity", "Blender"]}
          />
          <Education
            title="License Informatique - L1, L2"
            date="2015 - 2018"
            school="Faculté de Sciences"
            schoolLogoRef="/assets/42.svg"
            tags={["C++", "Python", "SQL", "Misc"]}
          />
        </div>
      </div>
    </main>
  );
}
