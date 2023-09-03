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
    <div className="flex flex-col items-center hover:scale-105 ease-out duration-500 mx-auto">
      <motion.div
        className="items-center overflow-hidden"
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
        </Link>
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "auto", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl my-6 text-center">{project.title}</h2>
      </motion.div>
    </div>
  );
}
