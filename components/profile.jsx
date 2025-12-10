"use client";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "motion/react";

const Profile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <motion.div
        initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5},
                  spring: { stiffness: 10, damping: 20 }, 
                }}
        className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-700">
          <IoIosCloseCircle
            onClick={() => setIsActive(false)}
            className="text-white h-9 w-9 hover:scale-120 transform ease-in-out duration-200 hover:text-red-400"
          />
        <div className="absolute top-14 right-16 min-w-32 bg-white rounded-md flex flex-col justify-center items-center gap-2 py-2 px-6">
            <h1 className="text-center">Name</h1>
            <div className="w-10 h-10 bg-green-400 flex items-center justify-center">Pic</div>
            <button className="border border-emerald-400 text-black hover:bg-neutral-900 p-2 rounded-md">Profile</button>
            <button className="bg-red-500 hover:bg-red-400 p-2 rounded-md">Logout</button>
        </div>
        </motion.div>
      ) : (
        <div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-neutral-700">
          <CgProfile
            onClick={() => setIsActive(true)}
            className="text-white h-8 w-8 hover:scale-120 transform ease-in-out duration-200 hover:text-emerald-300"
          />
        </div>
      )}
    </>
  );
};

export default Profile;
