import React, { ReactNode } from "react";

type PropsType = {
  navbar: ReactNode;
  workDescription: ReactNode;
  services: ReactNode;
  skills: ReactNode;
  languages: ReactNode;
};

export function MainPageLayer({
  navbar,
  workDescription,
  services,
  skills,
  languages,
}: PropsType) {
  return (
    <div className="h-screen">
      {navbar}
      <section className="bg-center bg-cover bg-no-repeat w-full min-h-screen bg-avatar" />
      <section className="flex flex-col justify-center items-center relative max-w-[1300px] mx-auto min-h-[80vh]">
        {workDescription}
      </section>
      <section className="flex flex-col justify-start items-center relative max-w-[1300px] mx-auto min-h-[70vh]">
        {services}
      </section>
      <section className="flex flex-col justify-start items-center relative max-w-[1300px] mx-auto min-h-[50vh]">
        {skills}
      </section>
      <section className="flex flex-col justify-start items-center relative max-w-[1300px] mx-auto min-h-[50vh]">
        {languages}
      </section>
    </div>
  );
}
