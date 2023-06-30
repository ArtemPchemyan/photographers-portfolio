import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import clsx from "clsx";

export function ParallaxPage() {
  const parallaxLayerClassName =
    "bg-center bg-cover bg-no-repeat w-full h-full absolute";

  return (
    <>
      <Parallax pages={2.25} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className={clsx(parallaxLayerClassName, "bg-sky")} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.6}>
          <div className="w-full text-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[7vw] font-semibold uppercase tracking-widest">
              Artem Pchemyan
            </h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div className={clsx(parallaxLayerClassName, "bg-house")} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className={clsx(parallaxLayerClassName, "bg-ground")} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <div className={parallaxLayerClassName} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
