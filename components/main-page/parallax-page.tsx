import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import clsx from "clsx";
import avatar from "./../../store/model/assets/avatar.jpg";
import Image from "next/image";
import { Services } from "@/components/main-page/services/services";
import { Skills } from "@/components/main-page/skills/skills";

export function ParallaxPage() {
  const parallaxLayerClassName =
    "bg-center bg-cover bg-no-repeat w-full h-full absolute";

  return (
    <>
      <Parallax pages={6} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className={clsx(parallaxLayerClassName, "bg-sky")} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-1}
          sticky={{
            end: 1.25,
          }}
        >
          <div className="w-full text-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-[6vw] font-semibold uppercase tracking-[12px] text-white z-0">
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
          <div className={parallaxLayerClassName}>
            <div className="absolute top-[60%] left-1/2 -translate-y-2/4 -translate-x-2/4 uppercase tracking-[4px] text-[0.7vw] font-semibold">
              Hello! My name is
            </div>
            <div className="absolute top-[80%] left-1/2 -translate-y-2/4 -translate-x-2/4 uppercase tracking-[4px] text-[0.7vw] font-semibold">
              Photographer & Film maker
            </div>
            {/*<div>*/}
            {/*  <Image src={avatar} alt={"img"} className="" />*/}
            {/*</div>*/}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0}>
          <div className="absolute top-[100%] left-1/2 -translate-y-2/4 -translate-x-2/4 text-center">
            <h2 className="text-3xl font-semibold mb-7">
              Hi! My name is Artem,
              <br />
              i’m Photographer & Film maker based in Prague
            </h2>
            <div className="">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="">
              I am a professional photographer and videographer, specializing in
              creating visual content for advertising and other purposes. I
              offer you high-quality photo and video shooting that will help you
              promote your product, service or brand. I use professional
              equipment and software, and constantly improve my skills. I am
              focused on B2B video and photo production, for businesses that
              need quality and effective visual content for their purposes. I
              know the specifics and requirements of the market, can analyze the
              needs and expectations of customers, offer optimal solutions and
              strategies for achieving the best results. I guarantee a high
              level of professionalism and responsibility. On complex projects,
              I work with an assistant who helps me with organizing the shoot,
              preparing equipment, coordinating models, and other tasks.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{
            start: 3,
            end: 3,
          }}
        >
          <Services />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{
            start: 4,
            end: 4,
          }}
        >
          <Skills />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
