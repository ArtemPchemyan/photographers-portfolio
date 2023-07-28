import { ProjectsLayout } from "@/components/projects";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { PhotoCover } from "@/components/projects/photos/photo-cover";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import { useAppSelector } from "@/store/store";
import { Navbar } from "@/components/navbar/navbar";
import React, { useEffect, useRef, useState } from "react";
import { VideosProjectsStateType } from "@/store/model/videos-projects-store";
import { VideoCover } from "@/components/projects/videos/video-cover";
import { SwitchButton } from "@/components/ui-kit/switch-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function ProjectsPage() {
  const photosProjects = useAppSelector<PhotosProjectsStateType[]>(
    (state) => state.photosProjects
  );
  const videosProjects = useAppSelector<VideosProjectsStateType[]>(
    (state) => state.videosProjects
  );

  const [isPhotoFilter, setIsPhotoFilter] = useState(true);

  // const x = useMotionValue(0);
  // const xInput = [-100, 0, 100];
  // const background = useTransform(x, xInput, [
  //   "radial-gradient(#626262FF, #131313FF 50%",
  //   "radial-gradient(#626262FF, #131313FF 50%",
  //   "radial-gradient(#181818FF, #626262FF 100%)",
  // ]);

  const photosProjectsView = photosProjects.map((photo) => (
    <PhotoCover key={photo.id} project={photo} />
  ));
  const videosProjectsView = videosProjects.map((video) => (
    <VideoCover key={video.id} project={video} />
  ));

  const handleClickOnSwitch = () => {
    setIsPhotoFilter(!isPhotoFilter);
    localStorage.setItem("filter", isPhotoFilter ? "videos" : "photos");
  };

  useEffect(() => {
    const filter = localStorage.getItem("filter");
    setIsPhotoFilter(filter === "photos");
  }, []);

  return (
    // <motion.div style={{ background }}>
    <ProjectsLayout
      navbar={<Navbar />}
      title={<ProjectsTitle title={"Projects"} />}
      projects={isPhotoFilter ? photosProjectsView : videosProjectsView}
      actions={
        <SwitchButton toggle={isPhotoFilter} onClick={handleClickOnSwitch}>
          <FontAwesomeIcon
            icon={isPhotoFilter ? faImage : faVideo}
            style={{ color: "#1d1d1d" }}
            width={26}
            height={26}
          />
        </SwitchButton>
      }
    ></ProjectsLayout>
    // </motion.div>
  );
}
