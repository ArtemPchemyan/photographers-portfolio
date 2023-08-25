import React, { ReactNode } from "react";
import { Skill } from "@/components/main-page/skills/skill/skill";

type SkillType = {
  skill: string;
  progress: number;
};

const SKILLS: SkillType[] = [
  {
    skill: "Adobe Photoshop",
    progress: 99,
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
    progress: 80,
  },
  {
    skill: "Adobe After Effects",
    progress: 60,
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
    <>
      {divider}
      <div className="flex flex-wrap max-lg:flex-col w-full pt-24 pb-24">
        {SKILLS.map((el, index) => (
          <Skill
            key={index}
            title={el.skill}
            progress={el.progress}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
