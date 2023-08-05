import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import clsx from "clsx";
import avatar from "./../../store/model/assets/avatar.jpg";
import Image from "next/image";
import { Services } from "@/components/main-page/services/services";
import { Skills } from "@/components/main-page/skills/skills";
import { Divider } from "@/components/ui-kit/divider";
import { WorkDescription } from "@/components/main-page/work-description/work-description";

export function ParallaxPage() {
  const parallaxLayerClassName = "w-full h-full absolute";

  return (
    <>
      <Parallax pages={5} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="bg-center bg-cover bg-no-repeat w-full h-full absolute bg-avatar" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          sticky={{
            end: 0.55,
          }}
        >
          <div className="w-full text-center absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[6vw] font-semibold uppercase tracking-[12px] text-white z-0">
              Artem Pchemyan
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div>
            <div className="absolute top-[20%] left-1/2 -translate-y-2/4 -translate-x-2/4 uppercase tracking-[4px] text-[0.7vw] font-semibold">
              Hello! My name is
            </div>
            <div className="absolute top-[40%] left-1/2 -translate-y-2/4 -translate-x-2/4 uppercase tracking-[4px] text-[0.7vw] font-semibold">
              Photographer & Filmmaker
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.55} speed={0}>
          <WorkDescription />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Services divider={<Divider title={"Services"} />} />
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Skills divider={<Divider title={"Hard Skills"} />} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
