import React from "react";
import Link from "next/link";
import { NavbarLayout } from "@/components/navbar/navbar-layout_1";
import { motion } from "framer-motion";

export type MenuItemsType = {
  title: string;
  link: string;
};

const MENU_ITEMS: MenuItemsType[] = [
  { title: "Main", link: "/" },
  {
    title: "Portfolio",
    link: "/projects",
  },
];

export function Navbar() {
  return (
    <NavbarLayout>
      {MENU_ITEMS.map((el, index) => (
        <motion.p key={index} className="block px-10 bg-transparent pt-6">
          <Link href={MENU_ITEMS[index].link}>{MENU_ITEMS[index].title}</Link>
        </motion.p>
      ))}
    </NavbarLayout>
  );
}
