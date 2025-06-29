"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function Profile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="p-10 pb-0 lg:p-0 w-full lg:h-screen flex flex-col justify-start lg:flex-row-reverse lg:justify-around items-center">
        <Image
          src="/me.JPG"
          alt="profile"
          height={1000}
          width={1000}
          className={`border border-white rounded-2xl h-1/2 w-auto transition-all duration-500 transform${
            isVisible
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-y-[200%]"
          }`}
        />
        <div
          className={`flex flex-col items-start mt-8 lg:mt-0transition-all duration-500 transform${
            isVisible
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-[200%]"
          }`}
        >
          <h1 className="text-[8vw] lg:text-[6vw] font-bold flex flex-col leading-none border-l-3 pl-2">
            <span className="text-[6vw] lg:text-[4vw]">Hello, I'm</span>
            Kenneth Manuel
          </h1>
          <h1 className="text-[5vw] lg:text-[3vw] font-semibold text-gray-400">
            - Frontend Developer
          </h1>
          <div className="w-full mt-4 lg:mt-8 flex justify-center lg:justify-start">
            <a
              href="/cv/cv.pdf"
              download="Kenneth Manuel"
              className="text-black rounded-full p-4 px-8 cursor-pointer font-bold bg-white text-base"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <TextReveal>
        I have a strong ability to translate UI/UX designs into responsive
        interfaces that closely align with design specifications. I’m
        experienced with a range of UI frameworks and component libraries such
        as NextJs, Tailwind CSS, Aceternity UI and Magic UI which allow me to
        build visually appealing and user-friendly interfaces across devices. My
        focus on detail ensures a smooth user experience while maintaining
        accessibility and performance.
      </TextReveal>
    </div>
  );
}
