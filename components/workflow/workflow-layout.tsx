import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";

type PropsType = {
  navbar: ReactNode;
  children: ReactNode;
};

export function WorkflowLayout({ navbar, children }: PropsType) {
  const { width } = useWindowSize();
  return (
    <motion.div className="h-full bg-default relative">
      {navbar}
      <section className="flex items-center max-w-[1280px] 2xl:scale-150 mx-auto min-h-[80vh] py-24">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500 to-violet-500"
          initial={{ clipPath: "circle(1% at right 1%)" }}
          animate={
            width && width > 640
              ? { clipPath: "circle(45% at right 0%)" }
              : { clipPath: "circle(20% at right 0%)" }
          }
          transition={{
            duration: 4,
            type: "spring",
            mass: 2,
            damping: 10,
            stiffness: 50,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500 to-violet-500"
          initial={{ clipPath: "circle(1% at left 90%)" }}
          animate={
            width && width > 640
              ? { clipPath: "circle(30% at left 90%)" }
              : { clipPath: "circle(10% at left 90%)" }
          }
          transition={{
            duration: 4,
            type: "spring",
            mass: 2,
            damping: 10,
            stiffness: 50,
            delay: 0.3,
          }}
        />
        <div className="relative flex flex-wrap  gap-10 justify-center items-center max-w-[1200px] mx-auto">
          {children}
        </div>
      </section>
    </motion.div>
  );
}
