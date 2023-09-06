import React from "react";
import { ServiceType } from "@/components/main-page/services/services";
import { motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";

type PropsType = {
  service: ServiceType;
  index: number;
};

export const Service = ({ service, index }: PropsType) => {
  const { width } = useWindowSize();
  const serviceAnimation = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: width && width >= 1024 ? custom * 0.1 : 0,
      },
    }),
  };

  return (
    <motion.div
      className="flex flex-col items-center px-16 text-center"
      variants={serviceAnimation}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ amount: 0.3, once: true }}
    >
      {service.icon}
      <h5 className="text-xl font-medium py-6">{service.title}</h5>
      <p>{service.description}</p>
    </motion.div>
  );
};
