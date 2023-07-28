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
      <div className="h-56 flex items-end justify-center uppercase">
        {title}
      </div>
      <div className="h-32 flex justify-center items-center text-2xl">
        {actions}
      </div>
      <div className="grid grid-cols-3 gap-6">{projects}</div>
    </div>
  );
}
