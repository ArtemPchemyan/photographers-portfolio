export const useAnimation = () => {
  const coverAnimation = {
    hidden: {
      // opacity: 0,
      // scale: 0.9,
      height: 0,
    },
    visible: (custom: number) => ({
      // opacity: 1,
      // scale: 1,
      height: "100%",
      transition: {
        // type: "spring",
        duration: 0.5,
        delay: custom * 0.1,
      },
    }),
    hover: {
      // scale: 1.03,
      // transition: {
      //   type: "spring",
      //   duration: 0.4,
      // },
    },
  };
  return {
    coverAnimation,
    hidden: coverAnimation.hidden,
    visible: coverAnimation.visible,
    hover: coverAnimation.hover,
  };
};
