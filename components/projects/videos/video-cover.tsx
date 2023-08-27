import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VideosProjectsStateType } from "@/store/model/videos-projects-store";
import { motion } from "framer-motion";
import { useAnimation } from "@/components/projects/use-animation";

type PropsType = {
  project: VideosProjectsStateType;
  index: number;
};

export function VideoCover({ project, index }: PropsType) {
  const { coverAnimation, hidden, visible } = useAnimation();
  return (
    <motion.div
      className="items-center overflow-hidden "
      variants={coverAnimation}
      initial={hidden}
      whileInView={visible(index)}
      viewport={{ once: true }}
    >
      <Link href={`/projects/videos/${project.id}`} className="h-full">
        <Image
          src={project.cover}
          alt={"video-cover"}
          className="object-cover object-center h-full"
        />
        <h2>{project.title}</h2>
      </Link>
    </motion.div>
  );
}
