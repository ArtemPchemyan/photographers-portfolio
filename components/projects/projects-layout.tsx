import { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  title: ReactNode;
  projects: ReactNode;
  actions: ReactNode;
};

export function ProjectsLayout({
  navbar,
  title,
  projects,
  actions,
}: PropsType) {
  return (
    <div className="px-20">
      <div className="">{navbar}</div>
      <div className="pt-24 pb-12">{title}</div>
      <div className="flex justify-center pb-12 text-2xl">{actions}</div>
      <div className="grid grid-cols-3 gap-6">{projects}</div>
    </div>
  );
}
