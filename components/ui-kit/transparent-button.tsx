import React from "react";
import clsx from "clsx";

type PropsType = {
  disabled: boolean;
  onClick: () => void;
  side: "left" | "right";
};

export function TransparentButton({ disabled, onClick, side }: PropsType) {
  const buttonClassName = clsx(
    "absolute h-screen z-10 w-1/2 bg-transparent border-none",
    {
      left: "left-0 top-0",
      right: "right-0 top-0",
    }[side]
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    ></button>
  );
}
