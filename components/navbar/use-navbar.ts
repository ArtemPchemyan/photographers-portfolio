export function useNavbar(isOpen: boolean) {
  const animation = {
    hidden: {
      transform: "translateY(-200px)",
    },
    visible: (custom: number) => ({
      transform: isOpen ? "translateY(0px)" : "translateY(-200px)",
      transition: {
        type: "spring",
        mass: 0.5,
        duration: 0.2,
        ease: "easeOut",
        delay: custom * 0.1,
      },
    }),
  };
  const animationForMobileScreen = {
    hidden: {
      transform: "scale(0)",
      // display: "none",
      opacity: 0,
    },
    visible: (custom: number) => ({
      transform: isOpen ? "scale(1)" : "scale(0)",
      opacity: isOpen ? 1 : 0,
      // display: isOpen ? "inline-block" : "none",
      transition: {
        type: "spring",
        mass: 0.5,
        duration: 0.2,
        ease: "easeOut",
        delay: custom * 0.1,
      },
    }),
  };
  const popupMenu = {
    hidden: {
      // height: "0px",
    },
    visible: {
      // height: isOpen ? "100px" : "0px",
      transition: {
        duration: 0.2,
      },
    },
  };
  const popupMenuForMobileScreen = {
    hidden: {
      opacity: 0,
      height: "0",
    },
    visible: {
      opacity: 1,
      height: isOpen ? "100vh" : "0px",
      transition: {
        duration: 0.5,
      },
    },
  };

  return {
    animation,
    animationForMobileScreen,
    popupMenu,
    popupMenuForMobileScreen,
  };
}
