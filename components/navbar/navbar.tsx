import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useNavbar } from "@/components/navbar/use-navbar";
import { useWindowSize } from "@uidotdev/usehooks";
import { NavbarLayout } from "@/components/navbar/navbar-layout";
import { MenuButton } from "@/components/ui-kit/menu-button";

export type MenuItemsType = {
  title: string;
  link: string;
};

const MENU_ITEMS: MenuItemsType[] = [
  { title: "Main", link: "/" },
  { title: "Workflow", link: "/workflow" },
  { title: "Portfolio", link: "/projects" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    animation,
    animationForMobileScreen,
    popupMenu,
    popupMenuForMobileScreen,
  } = useNavbar(isOpen);

  const { width } = useWindowSize();

  if (width && width < 600) {
    return (
      <NavbarLayout
        menuButton={
          <MenuButton onClick={() => setIsOpen(!isOpen)} className="p-5" />
        }
        animation={popupMenuForMobileScreen}
        className="flex-col"
      >
        {MENU_ITEMS.map((el, index) => (
          <motion.p
            key={index}
            className="block px-10 bg-transparent py-1 text-xl"
            variants={animationForMobileScreen}
            initial={animationForMobileScreen.hidden}
            animate={animationForMobileScreen.visible(index)}
            exit={animation.hidden}
            custom={index}
          >
            <Link href={MENU_ITEMS[index].link}>{MENU_ITEMS[index].title}</Link>
          </motion.p>
        ))}
      </NavbarLayout>
    );
  }

  return (
    <NavbarLayout
      menuButton={
        <MenuButton onClick={() => setIsOpen(!isOpen)} className="p-5" />
      }
      animation={popupMenu}
    >
      {MENU_ITEMS.map((el, index) => (
        <AnimatePresence initial={false}>
          <motion.p
            key={index}
            className="block px-10 bg-transparent"
            variants={animation}
            initial={animation.hidden}
            animate={animation.visible(index)}
            exit={animation.hidden}
            custom={index}
          >
            <Link href={MENU_ITEMS[index].link}>{MENU_ITEMS[index].title}</Link>
          </motion.p>
        </AnimatePresence>
      ))}
    </NavbarLayout>
  );
}
