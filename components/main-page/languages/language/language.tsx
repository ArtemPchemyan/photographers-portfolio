import React from "react";

type PropsType = {
  language: string;
  progress: number;
};

export function Language({ language, progress }: PropsType) {
  return (
    <div className="w-1/3 flex flex-col items-center">
      <div
        className={`w-24 h-24 mb-6 bg-[conic-gradient(rgb(244,_67,_54)_${progress}%,_rgb(233,_233,_233)_${progress}%)] rounded-full relative flex justify-center items-center`}
        style={{
          background: `conic-gradient(rgb(249 115 22) ${progress}%, rgb(233, 233, 233) ${progress}%)`,
        }}
      >
        <div className="w-20 h-20 bg-default-bg inset-0 rounded-full" />
      </div>
      {language}
    </div>
  );
}
