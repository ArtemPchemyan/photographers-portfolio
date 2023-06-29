import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import { ProjectStateType } from "@/store/model/projects-store";
import { useSlider } from "@/components/projects/model/use-slider";
import { animated } from "@react-spring/web";

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

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
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
      </div>
      <div>
        <button
          onClick={() => setActiveIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="absolute h-screen z-10 left-0 top-0 w-1/2 bg-transparent border-none"
        ></button>
        {album && (
          <button
            onClick={() => setActiveIndex(activeIndex + 1)}
            disabled={activeIndex === album.length - 1}
            className="absolute h-screen z-10 right-0 top-0 w-1/2 bg-transparent border-none"
          ></button>
        )}
      </div>
    </>
  );
}
