"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [activePage, setActivePage] = useState<string>("/");
  const router = useRouter();

  const toggleModal = () => setModal((prev) => !prev);
  const goToPage = (path: string) => {
    setActivePage(path);
    setModal(false);
    router.push(path);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <div className="flex w-full h-[10%] backdrop-blur fixed inset-0 text-white border-b z-50">
      <div className="p-6 w-[70%] flex items-center justify-start">
        <button
          className="font-dancingScript w-10 h-10 border border-white rounded-full p-2 hover:scale-110"
          onClick={() => goToPage("/")}
        >
          K
        </button>
      </div>

      <div className="w-[30%] flex-row items-center justify-around md:flex hidden">
        {["Home", "About", "Projects", "Contact"].map((text) => {
          const path = text === "Home" ? "/" : `/${text.toLowerCase()}`;
          return (
            <button
              key={text}
              onClick={() => goToPage(path)}
              className={`hover:scale-110 relative group ${
                activePage === path ? "border-b-2 border-white" : ""
              }`}
            >
              <span className="border-b border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
                {text}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
          );
        })}
      </div>

      <div className="p-4 w-[40%] flex justify-end md:hidden">
        <button onClick={toggleModal}>
          <img src="/icons/hamburger.svg" alt="hamburger" className="h-full" />
        </button>
      </div>

      {modal && (
        <div className="bg-black bg-opacity-80 fixed inset-0 w-screen h-screen flex flex-col justify-end">
          <div className="w-full h-[70%] bg-black border-t rounded-t-3xl p-4">
            <div className="w-full flex justify-end h-[5%]">
              <button onClick={toggleModal}>
                <img src="/icons/close.svg" alt="close" className="h-full" />
              </button>
            </div>
            <div className="w-full flex flex-col items-center gap-4 mt-6">
              {["Home", "About", "Projects", "Contact"].map((text) => {
                const path = text === "Home" ? "/" : `/${text.toLowerCase()}`;
                return (
                  <button
                    key={text}
                    onClick={() => goToPage(path)}
                    className={`hover:scale-110 relative group ${
                      activePage === path ? "border-b-2 border-white" : ""
                    }`}
                  >
                    <span className=" text-[1.3em] border-b border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
                      {text}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
