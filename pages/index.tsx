import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { ParallaxPage } from "@/components/main-page/parallax-page";
import React from "react";
import { MainPageLayer } from "@/components/main-page/main-page-layer";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
    <MainPageLayer navbar={<Navbar />}>
      <ParallaxPage />
    </MainPageLayer>
  );
}
