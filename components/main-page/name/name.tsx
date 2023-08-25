import React from "react";
import { motion } from "framer-motion";

export function Name() {
  const textAnimation = {
    start: {
      y: "-32vh",
    },
    completed: (custom: number) => ({
      y: "0",
      transition: {
        duration: 0.7,
      },
    }),
  };

  return (
    <motion.div
      className="w-screen text-center px-8 py-4"
      initial="start"
      whileInView="completed"
      viewport={{ amount: 0.3 }}
    >
      <motion.h1
        className="text-[6vw] font-semibold uppercase tracking-[12px] text-white max-sm:text-[7vw]"
        variants={textAnimation}
      >
        Artem Pchemyan
      </motion.h1>
    </motion.div>
  );
}
