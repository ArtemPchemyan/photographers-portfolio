import React, { ReactNode } from "react";
import { Language } from "@/components/main-page/languages/language/language";

type LanguageType = {
  language: string;
  lvl: string;
  progress: number;
};

const LANGUAGES: LanguageType[] = [
  {
    language: "Czech",
    lvl: "B2",
    progress: 75,
  },
  {
    language: "English",
    lvl: "B1",
    progress: 60,
  },
  {
    language: "Russian",
    lvl: "C1",
    progress: 95,
  },
];

type PropsType = {
  divider: ReactNode;
};

export function Languages({ divider }: PropsType) {
  return (
    <>
      {divider}
      <div className="flex flex-wrap max-sm:flex-col justify-between w-full pt-24 pb-16">
        {LANGUAGES.map((el, index) => (
          <Language
            key={index}
            language={el.language}
            lvl={el.lvl}
            progress={el.progress}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
