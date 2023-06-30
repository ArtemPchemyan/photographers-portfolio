import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import { ProjectStateType } from "@/store/model/projects-store";
import { useSlider } from "@/components/projects/use-slider";
import { animated } from "@react-spring/web";
import { TransparentButton } from "@/components/ui-kit/transparent-button";
import { PhotoLayout } from "@/components/projects/photo-layout";
import { Navbar } from "@/components/navbar/navbar";

export default function PhotoId() {
  const projects = useAppSelector<ProjectStateType[]>(
    (state) => state.projects
  );
  const router = useRouter();
  const { projectId, photoId } = router.query;

  const project = projects.find((el) => el.id === projectId);
  const album = project?.album;

  const { transitions, activeIndex, setActiveIndex } = useSlider(
    album ?? [],
    +photoId! ?? 0
  );

  const actionsRender = (
    <div>
      <TransparentButton
        onClick={() => setActiveIndex(activeIndex - 1)}
        disabled={activeIndex === 0}
        side={"left"}
      />
      {album && (
        <TransparentButton
          onClick={() => setActiveIndex(activeIndex + 1)}
          disabled={activeIndex === album.length - 1}
          side={"right"}
        />
      )}
    </div>
  );

  return (
    <PhotoLayout navbar={<Navbar />} actions={actionsRender}>
      {transitions((style, item) => (
        <animated.img
          key={item.id}
          style={style}
          src={item.src.src}
          alt="albumPhoto"
          className={
            "absolute inset-0 w-full h-full object-cover object-center"
          }
        ></animated.img>
      ))}
    </PhotoLayout>
  );
}
