"use client";
import { useEffect, useState } from "react";
import Socials from "@/components/contactMe/socials";
import Contacts from "@/components/contactMe/contact";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="w-full h-full text-white font-HelveticaNeue flex flex-col md:flex-row mt-24 md:mt-36 overflow-x-hidden">
      <div
        className={` w-full h-full md:w-[50%] px-4 transition-all duration-500 md:duration-1000 transform${
          isVisible
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-[100%]"
        }`}
      >
        <div className="mt-2 w-full text-center font-bold text-3xl animate-bounce">
          LET'S CONNECT
        </div>
        <Contacts />
      </div>
      <div
        className={` w-full md:w-[50%] transition-all duration-1000 transform p-4 ${
          isVisible
            ? "opacity-100 -translate-x-0 md:translate-x-0"
            : "opacity-0 -translate-x-[100%] md:translate-x-[100%]"
        } `}
      >
        <div className=" md:mt-6 w-full rounded-xl border">
          <div className=" mt-4 w-full text-center font-bold text-3xl">
            SOCIALS
          </div>
          <Socials />
        </div>
      </div>
    </main>
  );
}
