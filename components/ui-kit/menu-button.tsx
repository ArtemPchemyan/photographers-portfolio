import React from "react";
import clsx from "clsx";

type PropsType = {
  onClick: () => void;
  className: string;
};

export function MenuButton({ onClick, className }: PropsType) {
  return (
    <button className={clsx(className, "")} onClick={onClick}>
      Menu
    </button>
  );
}
