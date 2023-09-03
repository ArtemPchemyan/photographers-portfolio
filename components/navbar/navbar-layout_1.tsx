import React, { HTMLAttributes, ReactNode } from "react";
import { animated, SpringValue, UseSpringProps } from "@react-spring/web";
import clsx from "clsx";

type PropsType = {
  className?: string;
  children: ReactNode;
};

export function NavbarLayout({ className, children }: PropsType) {
  return (
    <nav className="absolute left-0 z-20 w-screen bg-transparent">
      <animated.div
        className={clsx(
          "flex justify-center items-center absolute bg-default-bg w-full text-center",
          className
        )}
      >
        {children}
      </animated.div>
    </nav>
  );
}
