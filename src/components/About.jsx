// eslint-disable-next-line no-unused-vars
import React from "react";
import image from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        ABOUT <span className="text-neutral-500"> ME</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={image} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 ">
              I am a dedicated and versatile front-end developer with a passion
              for creating efficient and user-friendly web applications. With 2
              years of professional experience, I have worked extensively with
              technologies like HTML, CSS, and JavaScript and experienced in
              utilizing libraries and frameworks like React.js, TailwindCSS and
              Bootstrap. My journey in web development began with a deep
              curiosity for how things work, and it has evolved into a career
              where I continuously strive to learn and adapt to new challenges.
              I thrive in collaborative environments and enjoy solving complex
              problems to deliver high-quality, seamless user interfaces.
              Outside of coding, I enjoy staying active, exploring new
              technologies, and contributing to various projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
