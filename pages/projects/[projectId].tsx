import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import { ProjectStateType } from "@/store/model/projects-store";

export default function ProjectId() {
  const projects = useAppSelector<ProjectStateType[]>(
    (state) => state.projects
  );

  const router = useRouter();
  const { projectId } = router.query;

  const project = projects.find((el) => el.id === projectId);

  return (
    <ProjectLayout title={project?.title}>
      {project &&
        project.album.map((el) => (
          <Image key={el.id} src={el.src} alt={"img"} />
        ))}
    </ProjectLayout>
  );
}

type ProjectLayoutPropsType = {
  title: ReactNode;
  children: ReactNode;
};

function ProjectLayout({ title, children }: ProjectLayoutPropsType) {
  return (
    <>
      <div>{title}</div>
      <div className="grid grid-cols-4 gap-6 px-20">{children}</div>
    </>
  );
}
