// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { RiHtml5Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa6";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-neutral-300">
        TECH<span className="text-neutral-500">NOLOGIES</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4 ">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <h2>React</h2>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-7xl text-yellow-400" />
          </div>
          <h1>JavaScript</h1>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-[#2163B1] " />
          </div>
          <h1>CSS 3</h1>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <RiHtml5Fill className="text-7xl text-[#FC490B]" />
          </div>
          <h1>HTML 5</h1>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-[#0EA5E9]" />
          </div>
          <h1>Tailwind CSS</h1>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <FaBootstrap className="text-7xl text-[#7A11F7]" />
          </div>
          <h1>Bootstrap</h1>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-[#F05133]" />
          </div>
          <h1>Git</h1>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <AiFillGithub className="text-7xl" />
          </div>
          <h1>GitHub</h1>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
