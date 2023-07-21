import { ProjectsLayout } from "@/components/projects";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectStateType } from "@/store/model/projects-store";
import { useAppSelector } from "@/store/store";
import { Navbar } from "@/components/navbar/navbar";
import React, { useState } from "react";
import { FilterButton } from "@/components/ui-kit/filter-button";

export default function ProjectsPage() {
  const photosProjects = useAppSelector<ProjectStateType[]>(
    (state) => state.photosProjects
  );

  const [filter, setFilter] = useState<"photos" | "videos">("photos");

  const photosProjectsView = photosProjects.map((project) => (
    <ProjectCover key={project.id} project={project} />
  ));
  const videosProjectsView = "HERE WILL BE VIDEOS";

  const renderedProjects = () => {
    switch (filter) {
      case "photos":
        return photosProjectsView;
      case "videos":
        return videosProjectsView;
      default:
        return null;
    }
  };

  return (
    <ProjectsLayout
      navbar={<Navbar />}
      title={<ProjectsTitle title={"Projects"} />}
      projects={renderedProjects()}
      actions={
        <>
          <FilterButton
            name={"photos"}
            onClick={() => {
              setFilter("photos");
            }}
            side={"left"}
          />
          <FilterButton
            name={"videos"}
            onClick={() => {
              setFilter("videos");
            }}
            side={"right"}
          />
        </>
      }
    ></ProjectsLayout>
  );
}
