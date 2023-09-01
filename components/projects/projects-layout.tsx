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
    <div className="px-20 pb-20 max-sm:px-10">
      <div className="">{navbar}</div>
      <div className="pt-24 flex items-end justify-center uppercase">
        {title}
      </div>
      <div className="pt-10 pb-16 flex justify-center items-center text-2xl">
        {actions}
      </div>
      <div className="grid grid-cols-3 gap-16 max-md:grid-cols-1 max-lg:gap-10 max-lg:grid-cols-2 max-xl:gap-7">
        {projects}
      </div>
    </div>
  );
}
