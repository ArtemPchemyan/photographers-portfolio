import React, { ReactNode } from "react";
import { TelegramIcon } from "@/components/ui-kit/icons/telegram-icon";
import { PhoneIcon } from "@/components/ui-kit/icons/phone-icon";
import { InstagramIcon } from "@/components/ui-kit/icons/instagram-icon";
import { EmailIcon } from "@/components/ui-kit/icons/email-icon";
import { Contact } from "@/components/main-page/contacts/contact";

export type ContactType = {
  icon: ReactNode;
  content: string | number;
  link: string;
};

const iconsClassName = "w-6 h-6 text-white";
const CONTACTS: ContactType[] = [
  {
    icon: <PhoneIcon className={iconsClassName} />,
    content: "+420 735 076 055",
    link: "tel:+420735076055",
  },
  {
    icon: <EmailIcon className={iconsClassName} />,
    content: "pchemyanartem@gmail.com",
    link: "mailto:pchemyanartem@gmail.com",
  },
  {
    icon: <TelegramIcon className={iconsClassName} />,
    content: "@LeeMoure",
    link: "https://t.me/LeeMoure",
  },
  {
    icon: <InstagramIcon className={iconsClassName} />,
    content: "pchemyan.artem",
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
      <div className="max-w-[600px] pt-24 grid grid-cols-2 max-[800px]:flex max-[800px]:flex-col max-[800px]:py-12 gap-y-6 mx-auto absolute left-1/2 -translate-x-1/2 ">
        {CONTACTS.map((el, index) => {
          return <Contact key={index} contact={el} index={index} />;
        })}
      </div>
    </>
  );
}

export default Contacts;
