"use client";
import { FaHtml5, FaCss3Alt, FaGitSquare } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "NextJs", icon: <RiNextjsFill /> },
  { name: "Git", icon: <FaGitSquare /> },
];

export default function Techstack() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="mt-10 lg:mt-20 flex flex-col w-full items-center">
      <h2
        className="text-[10vw] lg:text-[5vw] font-bold mb-8"
        data-aos="fade-up"
      >
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={item.name}
            className=" flex flex-col items-center space-y-2 text-[4vw] lg:text-[2vw] text-white border border-white rounded-2xl p-4"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="text-[10vw] lg:text-[5vw] text-white">
              {item.icon}
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
