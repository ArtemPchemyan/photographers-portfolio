import React from "react";
import Link from "next/link";
import { ContactType } from "@/components/main-page/contacts/contacts";
import { motion } from "framer-motion";

type PropsType = {
  contact: ContactType;
  index: number;
};

export function Contact({ contact, index }: PropsType) {
  const contactsAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        delay: custom * 0.05,
      },
    }),
  };

  return (
    <motion.div
      variants={contactsAnimation}
      initial={"hidden"}
      whileInView={"visible"}
      custom={index}
    >
      <Link href={contact.link} className="flex items-center pl-8">
        <div>{contact.icon}</div>
        <div className="pl-4">{contact.content}</div>
      </Link>
    </motion.div>
  );
}
