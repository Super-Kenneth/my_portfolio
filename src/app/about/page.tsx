"use client";
import { useEffect, useState } from "react";
import PersonalInfo from "@/components/aboutMe/personal_info";
import Techstack from "@/components/aboutMe/techstack";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main className="w-full text-white font-HelveticaNeue flex flex-col items-center mt-24 md:mt-36 overflow-x-hidden">
      <div className=" w-full flex flex-col md:flex-row">
        <div
          className={` md:w-[50%] flex justify-center items-center transition-all duration-500 md:duration-1000 transform${
            isVisible
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-[100%]"
          }`}
        >
          <img
            src="/images/me.png"
            alt="me"
            className=" h-52 rounded-full md:h-96"
          />
        </div>
        <div className=" mt-4 flex flex-col justify-center items-center gap-y-2 md:items-start md:text-start md:w-[50%]">
          <h1 className=" text-[1.5em] md:text-[3em] font-bold">
            Personal Information
          </h1>
          <PersonalInfo />
        </div>
      </div>
      <Techstack />
      
    </main>
  );
}
