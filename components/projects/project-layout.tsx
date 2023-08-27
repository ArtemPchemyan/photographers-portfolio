import React, { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  title: ReactNode;
  description?: string;
  photo?: ReactNode;
  video?: ReactNode;
};

export function ProjectLayout({
  navbar,
  title,
  description,
  photo,
  video,
}: PropsType) {
  return (
    <div className="max-[550px]:px-10 px-20">
      {navbar}
      <div className="h-56 flex items-end">{title}</div>
      <div className="pb-12">{description}</div>
      {photo && (
        <div className="gap-6 grid md:grid-cols-3 lg:grid-cols-4 2xl:gap-24">
          {photo}
        </div>
      )}
      {video && (
        <div className="gap-6 grid md:grid-cols-3 lg:grid-cols-4 2xl:gap-24">
          {video}
        </div>
      )}
    </div>
  );
}
