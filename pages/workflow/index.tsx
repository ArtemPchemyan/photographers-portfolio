import React from "react";
import { WorkflowLayout } from "@/components/workflow/workflow-layout";
import { Navbar } from "@/components/navbar/navbar";
import { motion } from "framer-motion";

const PIPELINE = [
  "Client's goals and objectives definition",
  "Concept and scenario development",
  "Location scouting, casting of actors or models, equipment selection",
  "Preparation of technical equipment and tools for shooting (cameras, microphones, stabilizers, lighting, etc.)",
  "Shooting",
  "Video editing: scene cutting, adding music, sound effects, color correction, etc.",
  "Adding special effects if needed",
  "Creation and addition of titles, captions, or other graphics",
  "Soundtrack editing",
  "Video preparation and optimization for export: format and resolution selection, compression, encoding",
  "Video export",
  "Delivery of the final video to the client",
];

const Workflow = () => {
  const animation = {
    hidden: {
      opacity: 0,
      scale: 0.2,
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 75,
        duration: 0.4,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <WorkflowLayout navbar={<Navbar />}>
      {PIPELINE.map((el, index) => {
        return (
          <motion.div
            key={index}
            className="relative w-[300px] h-[130px] shadow-[20px_20px_50px_rgba(0,_0,_0,_0.5)] bg-white/5 overflow-hidden flex justify-center items-center rounded-2xl border-t-[1px] border-t-white/40 border-l-[1px] border-l-white/40 backdrop-blur-md "
            variants={animation}
            initial={"hidden"}
            whileInView={"visible"}
            custom={index}
            viewport={{ once: true }}
          >
            <div className="p-5 text-center duration-500">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5 pointer-events-none ">
                {index}
              </h2>
              <p>{el}</p>
            </div>
          </motion.div>
        );
      })}
    </WorkflowLayout>
  );
};

export default Workflow;
