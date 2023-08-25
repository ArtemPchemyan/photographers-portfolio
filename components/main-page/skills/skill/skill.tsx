import React from "react";
import { motion } from "framer-motion";

type PropsType = {
  title: string;
  progress: number;
  index: number;
};

export function Skill({ title, progress, index }: PropsType) {
  const skillAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        delay: custom * 0.05,
      },
    }),
  };

  const progressAnimation = {
    start: {
      background: "rgb(187,187,187)",
      width: 0,
    },
    completed: {
      background: "rgb(249 115 22)",
      width: `${progress}%`,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="w-1/2 px-6 mb-6"
      variants={skillAnimation}
      initial={"hidden"}
      whileInView={"visible"}
      custom={index}
    >
      <div className="pb-6">{title}</div>
      <div className="bg-slate-50 h-1">
        <motion.div
          className="h-1 bg-orange-500"
          variants={progressAnimation}
          initial={"start"}
          whileInView={"completed"}
        ></motion.div>
      </div>
    </motion.div>
  );
}
