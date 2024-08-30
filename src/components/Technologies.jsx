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
import { motion } from "framer-motion";
const Technologies = () => {
  const animated = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} className="my-20 text-center text-4xl text-neutral-300">
        TECH<span className="text-neutral-500">NOLOGIES</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={animated(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4 ">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <h2>React</h2>
        </motion.div>
        <motion.div
          variants={animated(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-7xl text-yellow-400" />
          </div>
          <h1>JavaScript</h1>
        </motion.div>
        <motion.div
          variants={animated(5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-[#2163B1] " />
          </div>
          <h1>CSS 3</h1>
        </motion.div>
        <motion.div
          variants={animated(2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <RiHtml5Fill className="text-7xl text-[#FC490B]" />
          </div>
          <h1>HTML 5</h1>
        </motion.div>
        <motion.div
          variants={animated(6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-[#0EA5E9]" />
          </div>
          <h1>Tailwind CSS</h1>
        </motion.div>
        <motion.div
          variants={animated(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <FaBootstrap className="text-7xl text-[#7A11F7]" />
          </div>
          <h1>Bootstrap</h1>
        </motion.div>
        <motion.div
          variants={animated(2.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-[#F05133]" />
          </div>
          <h1>Git</h1>
        </motion.div>
        <motion.div
          variants={animated(5.2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-y-2"
        >
          <div className="rounded-full border-4 border-neutral-800 p-4">
            <AiFillGithub className="text-7xl" />
          </div>
          <h1>GitHub</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
