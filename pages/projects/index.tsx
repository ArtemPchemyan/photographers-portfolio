import { ProjectsLayout } from "@/components/projects";
import { ProjectsTitle } from "@/components/projects/projects-title";
import { PhotoCover } from "@/components/projects/photos/photo-cover";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import { useAppSelector } from "@/store/store";
import { Navbar } from "@/components/navbar/navbar";
import React, { useEffect, useState } from "react";
import { VideosProjectsStateType } from "@/store/model/videos-projects-store";
import { VideoCover } from "@/components/projects/videos/video-cover";
import { SwitchButton } from "@/components/ui-kit/switch-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";

export default function ProjectsPage() {
  const photosProjects = useAppSelector<PhotosProjectsStateType[]>(
    (state) => state.photosProjects
  );
  const videosProjects = useAppSelector<VideosProjectsStateType[]>(
    (state) => state.videosProjects
  );

  const [isPhotoFilter, setIsPhotoFilter] = useState(true);

  const photosProjectsView = photosProjects.map((photo, index) => (
    <PhotoCover key={photo.id} project={photo} index={index} />
  ));
  const videosProjectsView = videosProjects.map((video, index) => (
    <VideoCover key={video.id} project={video} index={index} />
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
    <ProjectsLayout
      navbar={<Navbar />}
      title={<ProjectsTitle title={"Projects"} />}
      projects={isPhotoFilter ? photosProjectsView : videosProjectsView}
      actions={
        <SwitchButton toggle={isPhotoFilter} onClick={handleClickOnSwitch}>
          <FontAwesomeIcon
            icon={isPhotoFilter ? faImage : faVideo}
            style={{ color: "#1d1d1d" }}
            width={22}
            height={22}
          />
        </SwitchButton>
      }
    />
  );
}
