import React from "react";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  project: PhotosProjectsStateType;
};

export function PhotoCover({ project }: PropsType) {
  return (
    <div className="overflow-hidden flex flex-col items-center">
      <Link href={`/projects/photos/${project.id}`} className="h-full">
        <Image
          src={project.album[0].src}
          alt={"photo-cover"}
          className="object-cover object-center h-full"
        />
      </Link>
      <Link href={`/projects/photos/${project.id}`}>
        <h2 className="text-2xl mt-4 text-center">{project.title}</h2>
      </Link>
    </div>
  );
}
