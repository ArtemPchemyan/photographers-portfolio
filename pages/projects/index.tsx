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
import { SwitchButton } from "@/components/ui-kit/switch-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";

type FilterType = "photos" | "videos";

export default function ProjectsPage() {
  const photosProjects = useAppSelector<PhotosProjectsStateType[]>(
    (state) => state.photosProjects
  );
  const videosProjects = useAppSelector<VideosProjectsStateType[]>(
    (state) => state.videosProjects
  );

  const [isPhotoFilter, setIsPhotoFilter] = useState(true);

  const photosProjectsView = photosProjects.map((photo) => (
    <PhotoCover key={photo.id} project={photo} />
  ));
  const videosProjectsView = videosProjects.map((video) => (
    <VideoCover key={video.id} project={video} />
  ));

  // const renderedProjects = () => {
  //   isPhotoFilter ? photosProjectsView : videosProjectsView;
  //   // switch (toggle) {
  //   //   case "photos":
  //   //     return photosProjectsView;
  //   //   case "videos":
  //   //     return videosProjectsView;
  //   //   default:
  //   //     return photosProjectsView;
  //   // }
  // };

  const handleClickOnSwitch = () => {
    setIsPhotoFilter(!isPhotoFilter);
    localStorage.setItem("filter", isPhotoFilter ? "videos" : "photos");
  };

  useEffect(() => {
    const filter = localStorage.getItem("filter");
    console.log(filter === "photos");
    setIsPhotoFilter(filter === "photos");
  }, []);

  return (
    <ProjectsLayout
      navbar={<Navbar />}
      title={<ProjectsTitle title={"Projects"} />}
      projects={isPhotoFilter ? photosProjectsView : videosProjectsView}
      actions={
        <SwitchButton toggle={isPhotoFilter} onClick={handleClickOnSwitch}>
          {isPhotoFilter ? (
            <FontAwesomeIcon
              icon={faImage}
              style={{ color: "#1d1d1d" }}
              width={26}
              height={26}
            />
          ) : (
            <FontAwesomeIcon
              icon={faVideo}
              style={{ color: "#1d1d1d" }}
              width={26}
              height={26}
            />
          )}
        </SwitchButton>
      }
    ></ProjectsLayout>
  );
}
