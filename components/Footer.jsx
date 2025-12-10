import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800 border-t border-neutral-800 py-12 px-10 text-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_10px_#10b98180]">
            Electric Love
          </h1>
          <p className="text-zinc-400 mt-3 max-w-sm leading-relaxed">
            Powering Your Digital Life.<br />
            Shop electronics you’ll love — built with quality, performance,
            and cutting-edge style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-emerald-300 mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-zinc-400">
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Products</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">About</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Contact</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-emerald-300 mb-3">
            Follow Us
          </h2>
          <div className="flex gap-4 text-2xl">
            <a className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer">
              <FaInstagram />
            </a>
            <a className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer">
              <FaTwitter />
            </a>
            <a className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer">
              <FaYoutube />
            </a>
            <a className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-30"></div>

      {/* Bottom */}
      <div className="text-center text-zinc-500 text-sm mt-6">
        © {new Date().getFullYear()} Electric Love — All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
