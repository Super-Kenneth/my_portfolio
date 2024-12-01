"use client";
import { useEffect, useState } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main className=" w-full">
      <div className="w-full text-white font-HelveticaNeue flex flex-col items-center mt-36">
        <div className="h-full flex flex-col items-center text-center">
          <h1
            className={`text-[2em] font-extrabold md:text-[5em] transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 -translate-y-0"
                : "opacity-0 -translate-y-96"
            }`}
          >
            <span>Hi, I'm KENNETH</span>
          </h1>
          <p
            className={` text-[1.3em] md:text-[2.5em] transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 -translate-y-0"
                : "opacity-0  -translate-y-96"
            }`}
          >
            <span>- Front-end Developer</span>
          </p>
        </div>
        <div className=" text-center w-full md:w-[50%] mt-6">
          <p
            className={`md:text-[1.5em] text-gray-500 transition-all duration-300 transform ${
              isVisible
                ? "opacity-100 -translate-y-0"
                : "opacity-0 -translate-y-96"
            }`}
          >
            <span>
              With a strong ability to execute designs directly from UI
              concepts. I specialize in translating visual designs into fully
              functional, interactive web experiences while ensuring a seamless
              user interface.
            </span>
          </p>
        </div>
      </div>

      <About />
      <Projects />
      <Contact />
    </main>
  );
}
