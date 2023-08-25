import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Services } from "@/components/main-page/services/services";
import { Skills } from "@/components/main-page/skills/skills";
import { Divider } from "@/components/ui-kit/divider";
import { WorkDescription } from "@/components/main-page/work-description/work-description";
import { Languages } from "@/components/main-page/languages/languages";
import { Name } from "@/components/main-page/name/name";

export function ParallaxPage() {
  return (
    <>
      <Parallax pages={4.1} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="bg-center bg-cover bg-no-repeat w-full h-full absolute bg-avatar" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          sticky={{
            end: 0.55,
          }}
        >
          <Name />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <WorkDescription />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <Services divider={<Divider title={"Services"} />} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <Skills divider={<Divider title={"Hard Skills"} />} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.7} speed={0}>
          <Languages divider={<Divider title={"Languages"} />} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
