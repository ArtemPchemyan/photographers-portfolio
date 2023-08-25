import { Navbar } from "@/components/navbar/navbar";
import { ParallaxPage } from "@/components/main-page/parallax-page";
import React from "react";
import { MainPageLayer } from "@/components/main-page/main-page-layer";
import { MainPage1 } from "@/components/main-page/main-page";

export default function MainPage() {
  return (
    <MainPageLayer navbar={<Navbar />}>
      {/*<ParallaxPage />*/}
      <MainPage1 />
    </MainPageLayer>
  );
}
