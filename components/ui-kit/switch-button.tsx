import React, { ReactNode } from "react";
import {
  AnimatePresence,
  CustomValueType,
  motion,
  MotionValue,
} from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

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
        className={clsx("uppercase tracking-wide")}
        initial={{ opacity: 0 }}
        animate={{ opacity: toggle ? 1 : 0.3 }}
        exit={{ opacity: 0 }}
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
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className={""}
              key={toggle ? "photos" : "videos"}
              initial={{ x: toggle ? 30 : -30, opacity: 0 }}
              animate={{ x: toggle ? 0 : 0, opacity: 1 }}
              exit={{ x: toggle ? 30 : -30, opacity: 0 }}
              transition={{ duration: 0 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.h3
        className="uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: toggle ? 0.3 : 1 }}
        exit={{ opacity: 0 }}
        transition={spring}
      >
        Video
      </motion.h3>
    </div>
  );
};
