import React from "react";
import {useRouter} from "next/router";
import {useAppSelector} from "@/store/store";
import {ProjectLayout} from "@/components/projects/project-layout";
import {ProjectsTitle} from "@/components/projects/projects-title";
import {Navbar} from "@/components/navbar/navbar";
import {VideosProjectsStateType} from "@/store/model/videos-projects-store";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import {motion} from "framer-motion";
import {useAnimation} from "@/components/projects/use-animation";

export default function PhotosProjectId() {
  const videosProjects = useAppSelector<VideosProjectsStateType[]>(
      (state) => state.videosProjects
  );

  const router = useRouter();
  const {videosProjectId} = router.query;

  const {coverAnimation, hidden, visible} = useAnimation();

  const project = videosProjects.find((el) => el.id === videosProjectId);

  if (project)
    return (
        <ProjectLayout
            navbar={<Navbar/>}
            title={<ProjectsTitle title={project.title}/>}
            video={project.album.map((el, index) => (
                <motion.div
                    key={index}
                    variants={coverAnimation}
                    initial={hidden}
                    whileInView={visible(index)}
                    viewport={{once: true}}
                >
                  <LiteYouTubeEmbed
                      aspectHeight={9}
                      aspectWidth={16}
                      id={el}
                      title="{video_title}"
                  />
                </motion.div>
            ))}
        />
    );
}
