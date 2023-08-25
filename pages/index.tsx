import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import { MainPageLayer } from "@/components/main-page/main-page-layer";
import { WorkDescription } from "@/components/main-page/work-description/work-description";
import { Name } from "@/components/main-page/name/name";
import { Services } from "@/components/main-page/services/services";
import { Divider } from "@/components/ui-kit/divider";

export default function MainPage() {
  return (
    <MainPageLayer
      navbar={<Navbar />}
      workDescription={<WorkDescription name={<Name />} />}
      services={<Services divider={<Divider title={"Services"} />} />}
    />
  );
}
