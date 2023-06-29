import React from "react";
import {useRouter} from "next/router";
import {useAppSelector} from "@/store/store";
import Image from "next/image";
import {ProjectStateType} from "@/store/model/projects-store";
import {ProjectLayout} from "@/components/projects/project-layout";
import {ProjectsTitle} from "@/components/projects/projects-title";
import Link from "next/link";

export default function ProjectId() {
  const projects = useAppSelector<ProjectStateType[]>(
      (state) => state.projects
  );

  const router = useRouter();
  const {projectId} = router.query;

  const project = projects.find((el) => el.id === projectId);

  if (project)
    return (
        <ProjectLayout
            title={<ProjectsTitle title={project.title}/>}
            description={project.description}
        >
          {project.album.map((el, index) => (
              <Link href={`/projects/${project.id}/${el.id}`} key={index}>
                <Image src={el.src} alt={"img"}/>
              </Link>
          ))}
        </ProjectLayout>
    );
}
