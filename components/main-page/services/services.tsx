import React, { ReactNode } from "react";
import { Service } from "@/components/main-page/services/service/service";
import { AdIcon } from "@/components/ui-kit/icons/ad-icon";
import { VideoCameraIcon } from "@/components/ui-kit/icons/videocamera-icon";
import { PersonIcon } from "@/components/ui-kit/icons/person-icon";
import { motion } from "framer-motion";

export type ServiceType = {
  icon: ReactNode;
  title: string;
  description: string;
};
const iconsClassName = "w-20 h-20";
export const SERVICES: ServiceType[] = [
  {
    icon: <AdIcon className={iconsClassName} />,
    title: "Commercial photography and videography",
    description:
      "We offer professional commercial photography and videography service for businesses, organizations, and media outlets. We create photos and videos that showcase your products, services, or stories in an appealing and effective way.",
  },
  {
    icon: <VideoCameraIcon className={iconsClassName} />,
    title: "Event photography and videography",
    description:
      "I offer high-quality event photography and videography service for various occasions such as birthday parties, corporate events, or concerts. I document every detail and highlight of the occasion in photos and videos that you can share with your guests, clients, or fans.",
  },
  {
    icon: <PersonIcon className={iconsClassName} />,
    title: "Portrait photography and videography",
    description:
      "I offer professional portrait photography and videography service for individuals, families, and professionals. I capture your personality, style, and achievements in photos and videos that reflect your unique identity.",
  },
];

type PropsType = {
  divider: ReactNode;
};

export function Services({ divider }: PropsType) {
  return (
    <>
      {divider}
      <motion.div className="flex wrap xl:gap-16 pt-8 max-lg:flex-col max-lg:pb-16">
        {SERVICES.map((service, index) => (
          <Service key={index} service={service} index={index} />
        ))}
      </motion.div>
    </>
  );
}
