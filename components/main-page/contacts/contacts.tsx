import React, { ReactNode } from "react";
import { TelegramIcon } from "@/components/ui-kit/icons/telegram-icon";
import { PhoneIcon } from "@/components/ui-kit/icons/phone-icon";
import { InstagramIcon } from "@/components/ui-kit/icons/instagram-icon";
import { EmailIcon } from "@/components/ui-kit/icons/email-icon";
import Link from "next/link";

type ContactsType = {
  icon: ReactNode;
  title: string;
  contact: string | number;
  link: string;
};

const iconsClassName = "w-6 h-6 text-white";
const CONTACTS: ContactsType[] = [
  {
    icon: <PhoneIcon className={iconsClassName} />,
    title: "Phone",
    contact: "+420 735 076 055",
    link: "tel:+420735076055",
  },
  {
    icon: <EmailIcon className={iconsClassName} />,
    title: "Email",
    contact: "pchemyanartem@gmail.com",
    link: "mailto:pchemyanartem@gmail.com",
  },
  {
    icon: <TelegramIcon className={iconsClassName} />,
    title: "Telegram",
    contact: "@LeeMoure",
    link: "https://t.me/LeeMoure",
  },
  {
    icon: <InstagramIcon className={iconsClassName} />,
    title: "Instagram",
    contact: "pchemyan.artem",
    link: "https://www.instagram.com/pchemyan.artem/",
  },
];

type PropsType = {
  divider: ReactNode;
};

export function Contacts({ divider }: PropsType) {
  return (
    <>
      {divider}
      <div className="max-w-[600px] py-24 grid grid-cols-2 max-[800px]:flex max-[800px]:flex-col max-[800px]:py-12 gap-y-6 mx-auto absolute left-1/2 -translate-x-1/2 ">
        {CONTACTS.map((el, index) => {
          return (
            <Link key={index} href={el.link} className="flex items-center pl-8">
              <div>{el.icon}</div>
              <div className="pl-4">{el.contact}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Contacts;
