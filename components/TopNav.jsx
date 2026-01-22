import React from 'react'
import Image from "next/image";
import Profile from "@/components/profile";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../../my-app/public/images/Logo5.png";

const TopNav = ({ page }) => {
  return (
    <nav className="sticky bg-neutral-950 w-full top-0 flex justify-between px-4 py-1 z-50">
        <Image
          src={Logo}
          width={60}
          height={60}
          alt="Logo"
          className="hover:scale-120 transform ease-in-out duration-200"
        />
        <h1 className='text-4xl font-bold text-center text-white'>{page}</h1>
        <div className="flex items-center justify-center gap-2">
          <Profile />
          <FaCartShopping className="text-white text-2xl hover:scale-120 transform ease-in-out duration-200" />
        </div>
      </nav>
  )
}

export default TopNav
