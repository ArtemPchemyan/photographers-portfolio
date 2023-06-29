import React, { ReactNode } from "react";

type PropsType = {
  title: ReactNode;
  description: string;
  children: ReactNode;
};

export function ProjectLayout({ title, description, children }: PropsType) {
  return (
    <div className="px-20">
      <div className="pt-24 pb-12">{title}</div>
      <div className="pb-12">{description}</div>
      <div className="grid grid-cols-4 gap-6">{children}</div>
    </div>
  );
}
