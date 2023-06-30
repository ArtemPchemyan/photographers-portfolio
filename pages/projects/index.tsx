import { ProjectsLayout } from "@/components/projects";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { ProjectCover } from "@/components/projects/project-cover";
import { PROJECTS, ProjectStateType } from "@/store/model/projects-store";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
import { Navbar } from "@/components/navbar/navbar";

export default function ProjectsPage() {
  const projects = useAppSelector<ProjectStateType[]>(
    (state) => state.projects
  );

  return (
    <ProjectsLayout
      navbar={<Navbar />}
      title={<ProjectsTitle title={"Projects"} />}
      projects={projects.map((project) => (
        <ProjectCover key={project.id} project={project} />
      ))}
    ></ProjectsLayout>
  );
}
