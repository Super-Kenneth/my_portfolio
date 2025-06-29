import React from "react";
import Nav from "@/components/nav";
import Profile from "@/components/profile";
import Techstack from "@/components/techstack";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <div className=" w-full bg-black text-white">
      <Nav />
      <Profile />
      <Techstack />
      <Projects />
      <div className="h-50 w-full "></div>
    </div>
  );
}
