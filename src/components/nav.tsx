"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className=" flex flex-row w-full h-[10%] backdrop-blur fixed inset-0 text-white border-b">
      <div className=" p-6 w-[60%] flex items-center justify-start">
        <button className="font-dancingScript w-10 h-10 border border-white rounded-full p-2 flex justify-center items-center hover:scale-110">
          K
        </button>
      </div>
      <div className="w-[40%] flex-row items-center justify-around md:flex hidden">
        <button className="hover:scale-110 relative group">
          <span className=" border-b border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
            About Me
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
        <button className="hover:scale-110 relative group">
          <span className=" border-b border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
            Projects/Works
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
        <button className="hover:scale-110 relative group">
          <span className=" border-b border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
            Skills
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
        <button className="hover:scale-110 relative group">
          <span className=" border-b border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
            Contact
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      </div>

      <div className=" p-4 w-[40%] flex justify-end md:hidden">
        <button onClick={openModal}>
          <img src="/icons/hamburger.svg" alt="hamburger" className=" h-full" />
        </button>
      </div>

      {modal && (
        <div className=" bg-black bg-opacity-80 fixed inset-0 w-screen h-screen flex justify-start">
          <div className=" w-[70%] h-full bg-black border-r p-4">
            <div className="w-full flex flex-row justify-between h-[5%]">
              <button className="font-dancingScript w-10 h-10 border border-white rounded-full p-2 flex justify-center items-center hover:scale-110">
                K
              </button>
              <button onClick={closeModal}>
                <img src="/icons/close.svg" alt="close" className=" h-full" />
              </button>
            </div>
            <div className=" w-full flex flex-col gap-4 mt-6">
              <button className="">About Me</button>
              <button className="">Projects/Works</button>
              <button className="">Skills</button>
              <button className="">Contact</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
