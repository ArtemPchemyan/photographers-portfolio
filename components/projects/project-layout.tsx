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
    <div className="px-20">
      {navbar}
      <div className="pt-24 pb-12">{title}</div>
      <div className="pb-12">{description}</div>
      {photo && <div className="grid grid-cols-4 gap-6">{photo}</div>}
      {video && <div className="">{video}</div>}
    </div>
  );
}
