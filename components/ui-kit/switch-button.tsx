import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";

config.autoAddCss = false;

type PropsType = {
  toggle: boolean | null;
  onClick: () => void;
  children: ReactNode;
};

export const SwitchButton = ({ toggle, onClick, children }: PropsType) => {
  return (
    <div className="flex items-center gap-4">
      <motion.span
        className="uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        Photo
      </motion.span>
      <div
        className="h-14 w-36 bg-radial rounded-full flex items-center box-border px-1 cursor-pointer transition-all inline-block shadow-md "
        onClick={onClick}
        style={{ justifyContent: toggle ? "flex-start" : "flex-end" }}
      >
        <motion.div
          layout
          className="h-12 w-12 rounded-full grid items-center justify-center bg-white overflow-hidden shadow-md "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className={""}
              key={toggle ? "moon" : "sun"}
              initial={{ x: toggle ? 30 : -30, opacity: 0 }}
              animate={{ x: toggle ? 0 : 0, opacity: 1 }}
              exit={{ x: toggle ? 30 : -30, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.span
        className="uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: toggle ? 0 : 1, scale: toggle ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        Video
      </motion.span>
    </div>
  );
};
