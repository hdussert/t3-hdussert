"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";
import Project from "./Project";
import PROJECTS from "./project-data";
import { ProjectData } from "./project-types";

const PhoneScene = dynamic(
  () => import("~/components/three/scenes/PhoneScene"),
  {
    ssr: false,
  },
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  return (
    <div className="relative flex min-h-screen w-screen max-w-full justify-center">
      <Section
        id="projects"
        className="flex h-full min-h-screen w-full flex-col items-center justify-center py-8 sm:flex-row "
      >
        <div className="flex flex-col items-center sm:flex-1">
          <SectionTitle>Projets</SectionTitle>
          {PROJECTS.map((project) => (
            <Project
              key={project.title}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <div className="sm:flex-1"></div>
      </Section>
      <PhoneScene url={selectedProject?.url} />
    </div>
  );
};

export default Projects;
