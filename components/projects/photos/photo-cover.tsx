import React from "react";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  project: PhotosProjectsStateType;
};

export function PhotoCover({ project }: PropsType) {
  return (
    <div className="overflow-hidden flex items-center">
      <Link href={`/projects/photos/${project.id}`}>
        <Image src={project.album[0].src} alt={"photo-cover"} />
        <h2>{project.title}</h2>
      </Link>
    </div>
  );
}
