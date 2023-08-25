import React, { ReactNode } from "react";
import { Language } from "@/components/main-page/languages/language/language";

type LanguageType = {
  language: string;
  progress: number;
};

const LANGUAGES: LanguageType[] = [
  {
    language: "Czech",
    progress: 80,
  },
  {
    language: "English",
    progress: 60,
  },
  {
    language: "Russian",
    progress: 100,
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
            progress={el.progress}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
