import React, { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  title: ReactNode;
  description: string;
  children: ReactNode;
};

export function ProjectLayout({
  navbar,
  title,
  description,
  children,
}: PropsType) {
  return (
    <div className="px-20">
      {navbar}
      <div className="pt-24 pb-12">{title}</div>
      <div className="pb-12">{description}</div>
      <div className="flex gap-6 ">{children}</div>
    </div>
  );
}
