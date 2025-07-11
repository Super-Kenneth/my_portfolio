"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GoLinkExternal } from "react-icons/go";
import { TbBrandReactNative } from "react-icons/tb";

type Project = {
  name: string;
  image: string;
  techstacks: React.ElementType[];
  description: string | ReactNode;
  link: string;
};

const projects: Project[] = [
  {
    name: "CMI Connect",
    image: "/projects/cmi-connect.png",
    techstacks: [TbBrandReactNative, SiTailwindcss],
    description: (
      <>
        CMI Connect is our Thesis Project, a mobile application that allows
        students to view their Attendance logs and their E-wallet balance. It
        also has a feature that allows students to view the Announcements from
        the school. <br />
        <br />
        The E-wallet feature allows students to buy products from the canteen by
        tapping their NFC ID, and it will automatically deduct the amount from
        their E-wallet.
        <br />
        <br />
        Students can also send money to their friends using the E-wallet. <br />
        <br />
        We used React Native and TailwindCss to develop the app.
      </>
    ),
    link: " ",
  },
  {
    name: "Vans Clone",
    image: "/projects/vans-clone.png",
    techstacks: [FaHtml5, FaCss3Alt, SiJavascript],
    description:
      "Clone of the Vans website, showcasing responsive modern web design. Also to practice my skills in Frontend Development.",
    link: " ",
  },
  {
    name: "Tipsy Drinks",
    image: "/projects/tipsydrinks.png",
    techstacks: [RiNextjsFill, SiTailwindcss],
    description:
      "Tipsy Drinks is my personal project to practice my skills in frontend development and my ability in UI/UX. It features a collection of drink recipes with a modern design.",
    link: " ",
  },
  {
    name: "!JokesDev",
    image: "/projects/jokesdev.png",
    techstacks: [RiNextjsFill, SiTailwindcss],
    description:
      "!JokesDev is a fun project that generates random jokes about Devs using the JokeAPI. It showcases my skills in Next.js and Tailwind CSS, Also to practice my skills in Frontend Development and creating responsive designs.",
    link: "https://jokesdev.vercel.app/",
  },
  {
    name: "Demotivational Quotes",
    image: "/projects/demotivational-qoutes.png",
    techstacks: [RiNextjsFill, SiTailwindcss],
    description:
      "Demotivational Quotes is a project that generates random demotivational quotes using the Quotable API. It showcases my skills in Next.js and Tailwind CSS, Also to practice my skills in Frontend Development and creating responsive designs.",
    link: "https://demotivational-qoute.vercel.app/",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-black mt-10 lg:mt-20 text-white">
      <h1
        className="text-[10vw] lg:text-[5vw] font-bold mb-8"
        data-aos="fade-up"
      >
        My Projects
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
              className="w-auto h-auto mx-auto rounded"
            />
            <h2 className="text-[8vw] lg:text-[3vw] line-clamp-1 font-bold mt-4">
              {project.name}
            </h2>
            <p className="text-sm line-clamp-2 px-6">{project.description}</p>
            <div className="flex space-x-4 text-2xl mt-2 items-center justify-center">
              {project.techstacks.map((Icon, iconIndex) => (
                <Icon
                  key={iconIndex}
                  size={40}
                  className="border border-white rounded-xl p-2"
                />
              ))}
            </div>
            <div className="flex flex-row justify-around items-center mt-4">
              <button
                onClick={() => handleViewMore(project)}
                className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer"
              >
                View More
              </button>
              {project.link.trim() ? (
                <a
                  className="flex flex-row items-center gap-x-1 cursor-pointer border-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  Live Demo <GoLinkExternal />
                </a>
              ) : (
                <button
                  onClick={() => alert("Live version coming soon")}
                  className="flex flex-row items-center gap-x-1 cursor-pointer border-b text-white"
                >
                  Live Demo <GoLinkExternal />
                </button>
              )}
            </div>
          </div>
        ))}
      </main>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black rounded-lg p-6 w-full max-w-2xl relative max-h-[90%] overflow-y-scroll">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-3xl font-bold text-black"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <Image
              src={selectedProject.image}
              alt={selectedProject.name}
              width={600}
              height={350}
              className="rounded mb-4 mx-auto"
            />
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex space-x-4 text-2xl mt-2 items-center">
              {selectedProject.techstacks.map((Icon, index) => (
                <Icon
                  key={index}
                  size={40}
                  className="border border-black p-2 rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
