import { useSpring, useTrail } from "@react-spring/web";
import { MenuItemsType } from "@/components/navbar/navbar";

export function useNavbar(menuItems: MenuItemsType[], isOpen: boolean) {
  const animation = useTrail(menuItems.length, {
    config: {
      mass: 3,
      tension: 2000,
      friction: 200,
    },
    from: {
      transform: "translateY(-200px)",
      opacity: 0,
    },
    to: {
      transform: isOpen ? "translateY(0px)" : "translateY(-200px)",
      opacity: 1,
    },
  });
  const animationForMobileScreen = useTrail(menuItems.length, {
    config: {
      mass: 3,
      tension: 2000,
      friction: 200,
      duration: 200,
    },
    from: {
      transform: "scale(0)",
      display: "none",
    },
    to: {
      transform: isOpen ? "scale(1)" : "scale(0)",
      opacity: 1,
      display: isOpen ? "inline-block" : "none",
    },
  });
  const popupMenu = useSpring({
    config: {
      duration: 200,
    },
    from: {
      height: "0px",
    },
    to: {
      height: isOpen ? "100px" : "0px",
    },
  });
  const popupMenuForMobileScreen = useSpring({
    config: {
      duration: 150,
    },
    from: {
      width: "0px",
      height: "100vh",
    },
    to: {
      width: isOpen ? "100%" : "0px",
      height: "100vh",
    },
  });

  return {
    animation,
    animationForMobileScreen,
    popupMenu,
    popupMenuForMobileScreen,
  };
}
