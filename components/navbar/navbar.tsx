import React, { useState } from "react";
import { animated } from "@react-spring/web";
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
  { title: "About", link: "/about" },
  {
    title: "Portfolio",
    link: "/projects",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    animation,
    animationForMobileScreen,
    popupMenu,
    popupMenuForMobileScreen,
  } = useNavbar(MENU_ITEMS, isOpen);

  const size = useWindowSize();

  if (size.width < 600) {
    return (
      <NavbarLayout
        menuButton={
          <MenuButton onClick={() => setIsOpen(!isOpen)} className="p-5" />
        }
        style={popupMenuForMobileScreen}
        className="flex-col"
      >
        {animationForMobileScreen.map((props, index) => (
          <animated.p
            key={index}
            style={props}
            className="block px-10 bg-transparent"
          >
            <Link href={MENU_ITEMS[index].link}>{MENU_ITEMS[index].title}</Link>
          </animated.p>
        ))}
      </NavbarLayout>
    );
  }

  return (
    <NavbarLayout
      menuButton={
        <MenuButton onClick={() => setIsOpen(!isOpen)} className="p-5" />
      }
      style={popupMenu}
    >
      {animation.map((props, index) => (
        <animated.p
          key={index}
          style={props}
          className="block px-10 bg-transparent"
        >
          <Link href={MENU_ITEMS[index].link}>{MENU_ITEMS[index].title}</Link>
        </animated.p>
      ))}
    </NavbarLayout>
  );
}
