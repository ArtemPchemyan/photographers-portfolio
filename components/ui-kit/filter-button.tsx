import React from "react";
import clsx from "clsx";

type PropsType = {
  name: string;
  onClick: () => void;
  side: "left" | "right";
};

export function FilterButton({ name, onClick, side }: PropsType) {
  const buttonClassName = clsx(
    "bg-white text-default-bg uppercase px-2",
    {
      left: "rounded-l-lg border border-r-default-bg",
      right: "rounded-r-lg border border-l-default-bg",
    }[side]
  );

  return (
    <button onClick={onClick} className={buttonClassName}>
      {name}
    </button>
  );
}
