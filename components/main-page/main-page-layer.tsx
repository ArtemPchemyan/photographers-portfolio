import React, { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  children: ReactNode;
};

export function MainPageLayer({ navbar, children }: PropsType) {
  return (
    <section className="h-screen">
      {navbar}
      <div className="relative w-full h-full">{children}</div>
    </section>
  );
}
