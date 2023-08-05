import React, { ReactNode } from "react";
import { nanoid } from "nanoid";
import clsx from "clsx";
import { Skill } from "@/components/main-page/skills/skill/skill";

type SkillType = {
  skill: string;
  progress: number;
};

const SKILLS: SkillType[] = [
  {
    skill: "Adobe Photoshop",
    progress: 98,
  },
  {
    skill: "Adobe Lightroom",
    progress: 98,
  },
  {
    skill: "Adobe Premiere Pro",
    progress: 95,
  },
  {
    skill: "DaVinci Resolve",
    progress: 90,
  },
  {
    skill: "Adobe After Effects",
    progress: 80,
  },
  {
    skill: "Adobe Audition",
    progress: 45,
  },
];

type PropsType = {
  divider: ReactNode;
};

export function Skills({ divider }: PropsType) {
  return (
    <div className="relative max-w-[1300px] mx-auto">
      {divider}
      <div className="flex flex-wrap w-full pt-24 pb-16">
        {SKILLS.map((el, index) => (
          <Skill key={index} title={el.skill} progress={el.progress} />
        ))}
      </div>
    </div>
  );
}
