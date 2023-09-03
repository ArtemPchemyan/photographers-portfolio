import React from "react";
import { PhotosProjectsStateType } from "@/store/model/photos-projects-store";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useAnimation } from "@/components/projects/use-animation";

type PropsType = {
  project: PhotosProjectsStateType;
  index: number;
};

export function PhotoCover({ project, index }: PropsType) {
  const { coverAnimation, hidden, visible } = useAnimation();
  return (
    <motion.div
      className="overflow-hidden flex flex-col items-center hover:scale-110 ease-out duration-500"
      variants={coverAnimation}
      initial={hidden}
      whileInView={visible(index)}
      viewport={{ once: true }}
    >
      <Link href={`/projects/photos/${project.id}`} className="h-full">
        <Image
          src={project.album[0].src}
          alt={"photo-cover"}
          className="object-cover object-center h-full"
        />
      </Link>
      <Link href={`/projects/photos/${project.id}`}>
        <motion.h2
          className="text-2xl mt-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h2>
      </Link>
    </motion.div>
  );
}
