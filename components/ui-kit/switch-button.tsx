import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

type PropsType = {
  toggle: boolean | null;
  onClick: () => void;
  children: ReactNode;
};

export const SwitchButton = ({ toggle, onClick, children }: PropsType) => {
  const spring = {
    type: "spring",
    stiffness: 800,
    damping: 40,
    duration: 0.05,
  };

  return (
    <div className="flex w-full items-center justify-center gap-8">
      <motion.h3
        className="uppercase tracking-wide"
        animate={{ opacity: toggle ? 1 : 0.3 }}
        transition={spring}
      >
        Photo
      </motion.h3>
      <div
        className="h-16 w-36 bg-radial rounded-full flex items-center box-border px-1 cursor-pointer transition-all inline-block px-3 shadow-inset"
        onClick={onClick}
        style={{ justifyContent: toggle ? "flex-start" : "flex-end" }}
      >
        <motion.div
          layout
          className="h-12 w-12 rounded-full grid items-center justify-center bg-white overflow-hidden shadow-inset"
          transition={spring}
        >
          {children}
        </motion.div>
      </div>
      <motion.h3
        className="uppercase tracking-wide"
        animate={{ opacity: toggle ? 0.3 : 1 }}
        transition={spring}
      >
        Video
      </motion.h3>
    </div>
  );
};
