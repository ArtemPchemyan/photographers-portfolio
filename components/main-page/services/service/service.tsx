import React from "react";
import { ServiceType } from "@/components/main-page/services/services";

type PropsType = {
  service: ServiceType;
};

export function Service({ service }: PropsType) {
  return (
    <div className="flex flex-col items-center p-[90px] text-center">
      {service.icon}
      <h5 className="text-xl font-medium py-6">{service.title}</h5>
      <p>{service.description}</p>
    </div>
  );
}
