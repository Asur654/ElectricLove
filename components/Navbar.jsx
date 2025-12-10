import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
import { AiFillProduct } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Products",
      icon: (
        <AiFillProduct className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "/login",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About us",
      icon: (
        <FaInfoCircle className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "/register",
    },

    {
      title: "Cart",
      icon: (
        <FaCartShopping className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Orders",
      icon: (
        <FaHistory className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Support",
      icon: (
        <BiSupport className="h-full w-full text-neutral-950 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="backdrop-blur-md fixed bottom-2 inset-x-0 flex items-center justify-center z-50">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
