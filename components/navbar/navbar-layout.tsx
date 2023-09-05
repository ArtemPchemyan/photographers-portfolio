import React, { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type PropsType = {
  menuButton: ReactNode;
  animation: { hidden: {}; visible: {} };
  className?: string;
  children: ReactNode;
};

export function NavbarLayout({
  menuButton,
  animation,
  className,
  children,
}: PropsType) {
  return (
    <nav className="absolute left-0 z-20 w-screen bg-transparent">
      <div className="inline-block absolute inset-0 z-30">{menuButton}</div>
      <motion.div
        variants={animation}
        initial={animation.hidden}
        animate={animation.visible}
        exit={animation.hidden}
        className={clsx(
          "flex justify-center items-center absolute bg-default-bg min-[600px]:bg-transparent w-full text-center h-20",
          className
        )}
      >
        {children}
      </motion.div>
    </nav>
  );
}
