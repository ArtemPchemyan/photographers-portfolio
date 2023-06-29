import { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  title: ReactNode;
  projects: ReactNode;
};

export function ProjectsLayout({ navbar, title, projects }: PropsType) {
  return (
    <div className="px-20">
      <div className="">{navbar}</div>
      <div className="py-24">{title}</div>
      <div className="grid grid-cols-3 gap-6">{projects}</div>
    </div>
  );
}
