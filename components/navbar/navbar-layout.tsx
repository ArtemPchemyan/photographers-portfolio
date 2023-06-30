import React, { HTMLAttributes, ReactNode } from "react";
import { animated, SpringValue, UseSpringProps } from "@react-spring/web";
import clsx from "clsx";

type PropsType = {
  menuButton: ReactNode;
  style: { height: SpringValue<string> };
  className?: string;
  children: ReactNode;
};

export function NavbarLayout({
  menuButton,
  style,
  className,
  children,
}: PropsType) {
  return (
    <nav className="absolute left-0 z-20 w-screen bg-transparent">
      <div className="inline-block absolute inset-0 z-30">{menuButton}</div>
      <animated.div
        style={style}
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
