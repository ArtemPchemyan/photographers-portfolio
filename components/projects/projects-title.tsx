import React from "react";

type PropsType = {
  title: string;
};

export function ProjectsTitle({ title }: PropsType) {
  return (
    <h1 className="text-8xl max-md:text-6xl max-[500px]:text-4xl font-semibold leading-snug">
      {title}
    </h1>
  );
}
