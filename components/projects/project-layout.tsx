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
      <div className="h-56 flex items-end">{title}</div>
      <div className="pb-12">{description}</div>
      {photo && <div className="grid grid-cols-4 gap-6">{photo}</div>}
      {video && <div className="grid grid-cols-2 gap-12">{video}</div>}
    </div>
  );
}
