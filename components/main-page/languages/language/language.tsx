import React from "react";
import { motion } from "framer-motion";

type PropsType = {
  language: string;
  progress: number;
  index: number;
};

export function Language({ language, progress, index }: PropsType) {
  const languageAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
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
      background: `conic-gradient(rgb(249 115 22) 0%, rgb(233, 233, 233) 0%)`,
    },
    completed: {
      background: `conic-gradient(rgb(249 115 22) ${progress}%, rgb(233, 233, 233) ${progress}%)`,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="w-1/3 max-sm:w-full flex flex-col items-center pb-12"
      variants={languageAnimation}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.div
        className={`w-24 h-24 mb-6 rounded-full relative flex justify-center items-center`}
        variants={progressAnimation}
        initial="start"
        whileInView="completed"
        viewport={{ once: true }}
      >
        <div className="w-20 h-20 bg-default-bg inset-0 rounded-full" />
      </motion.div>
      {language}
    </motion.div>
  );
}
