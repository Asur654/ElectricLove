import React from "react";
import { MdWorkspacePremium } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

const WhyElove = () => {
  return (
    <div className="h-64 w-full bg-neutral-900 flex gap-16 items-center justify-center rounded-xl px-10">
      <div
        className="h-44 w-52 flex flex-col items-center justify-center rounded-xl gap-2 bg-neutral-800 p-4 
      hover:scale-110 transition-transform duration-300 
      hover:shadow-[0_0_20px_4px_rgba(16,185,129,0.6)]"
      >
        <MdWorkspacePremium className="text-green-500 text-4xl" />
        <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold text-center text-lg">
          Premium Products
        </h1>
        <p className="text-zinc-400 text-sm text-center h-12">
          Hand-picked electronics with verified quality.
        </p>
        </div>
      </div>

      <div
        className="h-44 w-52 flex flex-col items-center justify-center rounded-xl gap-2 bg-neutral-800 p-4 
      hover:scale-110 transition-transform duration-300
      hover:shadow-[0_0_20px_4px_rgba(234,179,8,0.6)]"
      >
        <MdOutlinePriceChange className="text-yellow-500 text-4xl" />
        <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold text-center text-lg">
          Best Prices Online
        </h1>
        <p className="text-zinc-400 text-sm text-center h-12">
          No middlemen. No inflated pricing.
        </p>
        </div>
      </div>

      <div
        className="h-44 w-52 flex flex-col items-center justify-center rounded-xl gap-2 bg-neutral-800 p-4 
      hover:scale-110 transition-transform duration-300
      hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.6)]"
      >
        <IoRocket className="text-orange-500 text-4xl" />
        <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold text-center text-lg">Fast Delivery</h1>
        <p className="text-zinc-400 text-sm text-center h-12">
          Lightning-fast shipping across India.
        </p>
        </div>
      </div>

      <div
        className="h-44 w-52 flex flex-col items-center justify-center rounded-xl gap-2 bg-neutral-800 p-4 
      hover:scale-110 transition-transform duration-300
      hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)]"
      >
        <RiSecurePaymentFill className="text-purple-500 text-4xl" />
        <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold text-center text-lg">
          Secure Payments
        </h1>
        <p className="text-zinc-400 text-sm text-center h-12">
          Your safety is our priority.
        </p>
        </div>
      </div>
    </div>
  );
};

export default WhyElove;
