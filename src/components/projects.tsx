"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const projects = [
  {
    name: "Vans Clone",
    image: "/projects/vans-clone.png",
    techstacks: [FaHtml5, FaCss3Alt, SiJavascript],
    description: "Description of Project 1",
  },
  {
    name: "Vans Clone",
    image: "/projects/vans-clone.png",
    techstacks: [FaHtml5, FaCss3Alt, SiJavascript],
    description: "Description of Project 1",
  },
  {
    name: "Vans Clone",
    image: "/projects/vans-clone.png",
    techstacks: [FaHtml5, FaCss3Alt, SiJavascript],
    description: "Description of Project 1",
  },
  {
    name: "Vans Clone",
    image: "/projects/vans-clone.png",
    techstacks: [FaHtml5, FaCss3Alt, SiJavascript],
    description: "Description of Project 1",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black mt-10 lg:mt-20">
      <h1
        className="text-[10vw] lg:text-[5vw] font-bold mb-8"
        data-aos="fade-up"
      >
        Projects
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 lg:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-white py-6 rounded-2xl text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className=" w-auto h-auto"
            />
            <h2 className="text-[8vw] lg:text-[3vw] font-bold">{project.name}</h2>
            <div className="flex space-x-4 text-2xl mt-2 items-center justify-center">
              {project.techstacks.map((Icon, iconIndex) => (
                <Icon
                  key={iconIndex}
                  size={50}
                  className=" border border-white rounded-xl p-2"
                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
