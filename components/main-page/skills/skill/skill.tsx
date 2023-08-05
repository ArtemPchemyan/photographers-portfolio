import React from "react";
import clsx from "clsx";

type PropsType = {
  title: string;
  progress: number;
};

export function Skill({ title, progress }: PropsType) {
  return (
    <div className="w-1/2 px-6 mb-6">
      <div className="pb-6">{title}</div>
      <div className="bg-slate-50 h-1">
        <div
          className={`bg-orange-500 h-1 w-[${progress}%]`}
          // data-value="95%"
        ></div>
      </div>
    </div>
  );
}
