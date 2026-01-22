"use client";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../lib/firebase';
import { signOut } from "firebase/auth";

const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <div className="relative">
      {/* Trigger */}
      <div
        onClick={() => setIsActive((prev) => !prev)}
        className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center
        hover:bg-neutral-700 transition cursor-pointer"
      >
        {isActive ? (
          <IoIosCloseCircle className="text-red-400 h-9 w-9" />
        ) : (
          <CgProfile className="text-white h-8 w-8 hover:text-emerald-300 transition" />
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 mt-4 w-56 rounded-xl bg-neutral-900
            border border-neutral-800 shadow-lg shadow-black/50 z-50"
          > 
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-neutral-800">
              <div className="w-10 h-10 rounded-full bg-emerald-400 text-neutral-950
              flex items-center justify-center font-bold">
                {user?.displayName?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">
                  {user?.displayName}
                </p>
                <p className="text-zinc-400 text-xs">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col p-2 gap-1">
              <button
                className="w-full text-left px-4 py-2 rounded-md text-zinc-300
                hover:bg-neutral-800 hover:text-white transition"
              >
                My Profile
              </button>

              <button
                className="w-full text-left px-4 py-2 rounded-md text-zinc-300
                hover:bg-neutral-800 hover:text-white transition"
              >
                Orders
              </button>

              <button
                className="w-full text-left px-4 py-2 rounded-md text-red-400
                hover:bg-red-500/10 transition"
                onClick={()=>signOut(auth)}
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
