import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Services } from "@/components/main-page/services/services";
import { Skills } from "@/components/main-page/skills/skills";
import { Divider } from "@/components/ui-kit/divider";
import { WorkDescription } from "@/components/main-page/work-description/work-description";
import { Languages } from "@/components/main-page/languages/languages";
import { Name } from "@/components/main-page/name/name";
import { Name1 } from "@/components/main-page/name/name1";
import { WorkDescription1 } from "@/components/main-page/work-description/work-description1";

export function MainPage1() {
  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat w-full h-full bg-avatar" />
      <WorkDescription1 name={<Name1 />} />
      <Services divider={<Divider title={"Services"} />} />
      <Skills divider={<Divider title={"Hard Skills"} />} />
      <Languages divider={<Divider title={"Languages"} />} />
    </>
  );
}
