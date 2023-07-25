import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VideosProjectsStateType } from "@/store/model/videos-projects-store";

type PropsType = {
  project: VideosProjectsStateType;
};

export function VideoCover({ project }: PropsType) {
  return (
    <div className="items-center overflow-hidden ">
      <Link href={`/projects/videos/${project.id}`} className="h-full">
        <Image
          src={project.cover}
          alt={"video-cover"}
          className="object-cover object-center h-full"
        />
        <h2>{project.title}</h2>
      </Link>
    </div>
  );
}
