export const useAnimation = () => {
  const coverAnimation = {
    hidden: {
      height: 0,
    },
    visible: (custom: number) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  };
  return {
    coverAnimation,
    hidden: coverAnimation.hidden,
    visible: coverAnimation.visible,
  };
};
