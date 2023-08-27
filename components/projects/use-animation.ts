export const useAnimation = () => {
  const coverAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        delay: custom * 0.1,
      },
    }),
  };
  return {
    coverAnimation,
    hidden: coverAnimation.hidden,
    visible: coverAnimation.visible,
  };
};
