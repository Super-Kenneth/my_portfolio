"use client";
import { TbHomeFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { useEffect, useState } from "react";
export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <nav
        className={` z-50 flex flex-row justify-between items-center space-x-3 h-[10%] border border-white backdrop-blur rounded-full fixed bottom-10 left-1/2 -translate-x-1/2 p-6 transition-all duration-500 transform${
          isVisible
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-y-[1000%]"
        }`}
      >
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer transform hover:scale-150 hover:-translate-y-1 active:bg-gray-400 rounded-full"
        >
          <TbHomeFilled size={40} color="white" />
        </a>

        <div className=" border-x border-x-white space-x-5 flex flex-row px-5 justify-center items-center">
          <a
            href="mailto:kennethcmanuel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer transform hover:scale-150 hover:-translate-y-1 active:bg-gray-400 rounded-full"
          >
            <MdEmail size={40} color="white" />
          </a>
          <a
            href="tel:+639289545595"
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer transform hover:scale-150 hover:-translate-y-1 active:bg-gray-400 rounded-full"
          >
            <MdLocalPhone size={40} color="white" />
          </a>
          <a
            href="https://m.me/kenneth.manuel.1219"
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer transform hover:scale-150 hover:-translate-y-1 active:bg-gray-400 rounded-full"
          >
            <FaFacebookMessenger size={40} color="white" />
          </a>
        </div>
        <a
          href="https://github.com/Super-Kenneth"
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer transform hover:scale-150 hover:-translate-y-1 active:bg-gray-400 rounded-full"
        >
          <FaGithub size={40} color="white" />
        </a>
      </nav>
    </>
  );
}
