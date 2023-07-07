import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlbumType } from "@/store/model/projects-store";

type PropsType = {
  projectId?: string | string[];
  photo: AlbumType;
};

export function ProjectPhoto({ projectId, photo }: PropsType) {
  return (
    <div className="flex items-center overflow-hidden ">
      <Link href={`/projects/${projectId}/${photo.id}`} className="h-full">
        <Image src={photo.src} alt={"img"} className="object-cover h-full" />
      </Link>
    </div>
  );
}
