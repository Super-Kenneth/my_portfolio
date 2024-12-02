"use client";
import { useEffect, useState } from "react";

export default function Techstack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stack = [
    { name: "Next.js", icon: "/stack/nextjs.svg" },
    { name: "React-Native", icon: "/stack/react.svg" },
    { name: "Tailwind CSS", icon: "/stack/tailwind.svg" },
    { name: "HTML5", icon: "/stack/html.svg" },
    { name: "CSS3", icon: "/stack/css.svg" },
    { name: "JavaScript", icon: "/stack/js.svg" },
  ];

  return (
    <div className="w-full md:w-[80%]">
      <div className="w-full mt-4 md:mt-16 text-center">
        <h1 className="text-[2em] md:text-[3em] font-bold">Tech Stacks</h1>
      </div>
      <div
        className={`mt-2 grid grid-cols-3 gap-2 justify-items-center transition-all duration-500 md:duration-1000 transform ${
          isVisible
            ? "opacity-100 -translate-x-0 md:translate-x-0"
            : "opacity-0 -translate-x-[500%] md:translate-x-[500%]"
        }`}
      >
        {stack.map((item, index) => (
          <button
            key={index}
            className="group rounded-xl text-center w-full flex flex-col justify-center items-center gap-y-2 border p-4 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-12 transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:grayscale"
            />
            <p className="text-sm md:text-xl">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
