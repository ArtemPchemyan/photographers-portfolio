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
  const { coverAnimation, hidden, visible, hover } = useAnimation();
  return (
    <motion.div
      className="items-center overflow-hidden "
      variants={coverAnimation}
      initial={hidden}
      whileInView={visible(index)}
      // whileHover={hover}
      viewport={{ once: true }}
    >
      <Link href={`/projects/videos/${project.id}`} className="h-full">
        <Image
          src={project.cover}
          alt={"video-cover"}
          className="object-cover object-center h-full hover:scale-110 ease-out duration-500"
        />
        <h2>{project.title}</h2>
      </Link>
    </motion.div>
  );
}
