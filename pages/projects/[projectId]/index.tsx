import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import { ProjectStateType } from "@/store/model/projects-store";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { Navbar } from "@/components/navbar/navbar";
import { ProjectPhoto } from "@/components/projects/project-photo";

export default function ProjectId() {
  const projects = useAppSelector<ProjectStateType[]>(
    (state) => state.projects
  );

  const router = useRouter();
  const { projectId } = router.query;

  const project = projects.find((el) => el.id === projectId);

  if (project)
    return (
      <ProjectLayout
        navbar={<Navbar />}
        title={<ProjectsTitle title={project.title} />}
        description={project.description}
      >
        {project.album.map((el, index) => (
          <ProjectPhoto key={index} projectId={projectId} photo={el} />
        ))}
      </ProjectLayout>
    );
}
