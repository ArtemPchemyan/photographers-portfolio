import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlbumType } from "@/store/model/photos-projects-store";
import { useAnimation } from "@/components/projects/use-animation";
import { motion } from "framer-motion";

type PropsType = {
  projectId?: string | string[];
  photo: AlbumType;
  index: number;
};

export function Photo({ projectId, photo, index }: PropsType) {
  const { coverAnimation, hidden, visible } = useAnimation();
  return (
    <motion.div
      className="items-center overflow-hidden "
      variants={coverAnimation}
      initial={hidden}
      whileInView={visible(index)}
      viewport={{ once: true }}
    >
      <Link
        href={`/projects/photos/${projectId}/${photo.id}`}
        className="h-full"
      >
        <Image
          src={photo.src}
          alt={"img"}
          className="object-cover object-center h-full hover:scale-110 ease-out duration-500"
        />
      </Link>
    </motion.div>
  );
}
