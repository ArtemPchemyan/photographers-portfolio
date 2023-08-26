import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlbumType } from "@/store/model/photos-projects-store";

type PropsType = {
  projectId?: string | string[];
  photo: AlbumType;
};

export function PhotoProject({ projectId, photo }: PropsType) {
  return (
    <div className="items-center overflow-hidden ">
      <Link
        href={`/projects/photos/${projectId}/${photo.id}`}
        className="h-full"
      >
        <Image
          src={photo.src}
          alt={"img"}
          className="object-cover object-center h-full"
        />
      </Link>
    </div>
  );
}
