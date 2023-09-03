import React from "react";
import { WorkflowLayout } from "@/components/workflow/workflow-layout";
import { Navbar } from "@/components/navbar/navbar";
import { motion } from "framer-motion";

const PIPELINE = [
  "Определение целей и задач клиента",
  "Разработка концепции и сценария",
  "Подбор локаций для съемки, актеров или моделей, необходимых оборудования",
  "Подготовка технического оборудования и инструментов для съемки (камеры, микрофоны, стабилизаторы, освещение и т.д.)",
  "Съемка",
  "Монтаж видео: нарезка сцен, добавление музыки, звуковых эффектов, цветокоррекция и т.д.",
  "Добавление спецэффектов, если необходимо",
  "Создание и добавление заголовков, плашек или иной графики",
  "Монтаж звуковой дорожки",
  "Подготовка и оптимизация видео для экспорта: выбор формата и разрешения, сжатие, кодирование",
  "Экспорт видео",
  "Передача клиенту готового видео",
];

const Workflow = () => {
  const animation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: custom * 0.3,
      },
    }),
  };

  return (
    <WorkflowLayout navbar={<Navbar />}>
      {PIPELINE.map((el, index) => {
        return (
          <motion.div
            key={index}
            className="relative w-[300px] h-[130px] shadow-[20px_20px_50px_rgba(0,_0,_0,_0.5)] bg-white/10 overflow-hidden flex justify-center items-center rounded-2xl border-t-[1px] border-t-white/40 border-l-[1px] border-l-white/40 backdrop-blur-sm"
            variants={animation}
            initial={"hidden"}
            animate={"visible"}
            custom={index}
            viewport={{ once: true }}
          >
            <div className="p-5 text-center duration-500">
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-5 pointer-events-none ">
                {index}
              </h2>
              <p>{el}</p>
            </div>
          </motion.div>
        );
      })}
    </WorkflowLayout>
  );
};

export default Workflow;
