import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { Navbar } from "@/components/navbar/navbar";
import { VideosProjectsStateType } from "@/store/model/videos-projects-store";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function PhotosProjectId() {
  const videosProjects = useAppSelector<VideosProjectsStateType[]>(
    (state) => state.videosProjects
  );

  const router = useRouter();
  const { videosProjectId } = router.query;

  debugger;

  const project = videosProjects.find((el) => el.id === videosProjectId);

  if (project)
    return (
      <ProjectLayout
        navbar={<Navbar />}
        title={<ProjectsTitle title={project.title} />}
        video={
          <LiteYouTubeEmbed
            aspectHeight={9}
            aspectWidth={16}
            id={project.link}
            title="{video_title}"
          />
        }
      />
    );
}
