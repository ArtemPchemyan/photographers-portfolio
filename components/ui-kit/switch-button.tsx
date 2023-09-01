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
    <div className="flex w-full items-center justify-center gap-6">
      <motion.button
        className="uppercase tracking-wide max-lg:text-xl"
        animate={{ opacity: toggle ? 1 : 0.3 }}
        transition={spring}
        onClick={onClick}
        disabled={toggle === true}
      >
        Photo
      </motion.button>
      <div
        className="h-14 w-32 bg-default-bg rounded-full flex items-center box-border px-1 cursor-pointer transition-all inline-block px-2 shadow-inset border-2 border-light-grey"
        onClick={onClick}
        style={{ justifyContent: toggle ? "flex-start" : "flex-end" }}
      >
        <motion.div
          layout
          className="h-9 w-9 rounded-full grid items-center justify-center bg-white overflow-hidden shadow-inset"
          transition={spring}
        >
          {children}
        </motion.div>
      </div>
      <motion.button
        className="uppercase tracking-wide max-lg:text-xl"
        animate={{ opacity: toggle ? 0.3 : 1 }}
        transition={spring}
        onClick={onClick}
        disabled={toggle === false}
      >
        Video
      </motion.button>
    </div>
  );
};
