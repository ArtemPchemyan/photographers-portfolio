import React from "react";
import { Divider } from "@/components/ui-kit/divider";
import { Service } from "@/components/main-page/services/service/service";
import { SERVICES } from "@/components/main-page/services/services";

export function Skills() {
  return (
    <div className="relative max-w-[1300px] mx-auto">
      <Divider title={"Hard Skills"} />
      <div className="flex wrap gap-16 mt-8">
        {SERVICES.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
