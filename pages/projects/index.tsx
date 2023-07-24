import { ProjectsLayout } from "@/components/projects";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { PhotoCover } from "@/components/projects/photos/photo-cover";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import { useAppSelector } from "@/store/store";
import { Navbar } from "@/components/navbar/navbar";
import React, { useEffect, useState } from "react";
import { FilterButton } from "@/components/ui-kit/filter-button";
import { VideosProjectsStateType } from "@/store/model/videos-projects-store";
import { VideoCover } from "@/components/projects/videos/video-cover";

type FilterType = "photos" | "videos";

export default function ProjectsPage() {
  const photosProjects = useAppSelector<PhotosProjectsStateType[]>(
    (state) => state.photosProjects
  );
  const videosProjects = useAppSelector<VideosProjectsStateType[]>(
    (state) => state.videosProjects
  );

  const [filter, setFilter] = useState<string | null>(null);

  const photosProjectsView = photosProjects.map((photo) => (
    <PhotoCover key={photo.id} project={photo} />
  ));
  const videosProjectsView = videosProjects.map((video) => (
    <VideoCover key={video.id} project={video} />
  ));

  const renderedProjects = () => {
    switch (filter) {
      case "photos":
        return photosProjectsView;
      case "videos":
        return videosProjectsView;
      default:
        return photosProjectsView;
    }
  };

  useEffect(() => {
    const filter = localStorage.getItem("filter");
    setFilter(filter);
  }, []);

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
              localStorage.setItem("filter", "photos");
            }}
            side={"left"}
          />
          <FilterButton
            name={"videos"}
            onClick={() => {
              setFilter("videos");
              localStorage.setItem("filter", "videos");
            }}
            side={"right"}
          />
        </>
      }
    ></ProjectsLayout>
  );
}
