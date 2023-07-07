import React from "react";
import { ProjectStateType } from "@/store/model/projects-store";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  project: ProjectStateType;
};

export function ProjectCover({ project }: PropsType) {
  return (
    <div className="overflow-hidden flex items-center">
      <Link href={`/projects/${project.id}`}>
        <Image src={project.album[0].src} alt={"cover"} />
        <h2>{project.title}</h2>
      </Link>
    </div>
  );
}
