import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type PropsType = {
  navbar: ReactNode;
  children: ReactNode;
};

export function WorkflowLayout({ navbar, children }: PropsType) {
  return (
    <motion.div className="h-screen bg-default relative">
      {navbar}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500 to-violet-500"
        initial={{ clipPath: "circle(10% at right 70%)" }}
        animate={{ clipPath: "circle(45% at right 60%)" }}
        transition={{ duration: 4 }}
      />
      {/*<motion.div*/}
      {/*  className="absolute top-0 left-0 w-[150px] h-[150px] bg-gradient-to-b from-[#2196f3] to-[#e91e63]"*/}
      {/*  initial={{ clipPath: "circle(20% at 10% 50%)" }}*/}
      {/*  animate={{*/}
      {/*    x: [-100, 300, 600, 900, 500, 200],*/}
      {/*    y: [-100, 100, 400, 700, 1200, 900],*/}
      {/*  }}*/}
      {/*  transition={{ duration: 3 }}*/}
      {/*/>*/}
      <section className="flex items-center max-w-[1280px] 2xl:scale-150 mx-auto min-h-[80vh] pt-24">
        <div className="relative flex flex-wrap max-lg:flex-col gap-10 justify-center items-center max-w-[1200px] mx-auto">
          {children}
        </div>
      </section>
    </motion.div>
  );
}
