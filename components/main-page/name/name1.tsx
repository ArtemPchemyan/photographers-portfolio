import React from "react";
import { motion } from "framer-motion";

export function Name1() {
  const textAnimation = {
    start: {
      y: "-210%",
    },
    finish: (custom) => ({
      y: "0",
      transition: {
        duration: 0.7,
      },
    }),
  };

  return (
    <motion.div
      className="w-screen text-center"
      initial="start"
      whileInView="finish"
    >
      <motion.h1
        className="text-[6vw] font-semibold uppercase tracking-[12px] text-white"
        variants={textAnimation}
      >
        Artem Pchemyan
      </motion.h1>
    </motion.div>
  );
}
