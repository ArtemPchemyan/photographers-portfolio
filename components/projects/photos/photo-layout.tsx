import React, { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  children: ReactNode;
  actions: ReactNode;
};

export function PhotoLayout({ navbar, actions, children }: PropsType) {
  return (
    <>
      {navbar}
      {actions}
      <div className="relative w-full h-screen overflow-hidden">{children}</div>
    </>
  );
}
