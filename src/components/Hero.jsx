// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import image from "../assets/person.png";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["web development.", "web growth.", "web designing."],
      typeSpeed: 100, // Speed of typing
      backSpeed: 50, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the animation
    };

    const typed = new Typed(typedRef.current, options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Arhum Javaid
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.h2
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="text-4xl mt-3 font-extralight flex items-center flex-wrap"
            >
              I PROVIDE
              <span
                className="uppercase bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-bold pl-2"
                ref={typedRef}
              ></span>
            </motion.h2>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              As a front-end developer, I am deeply passionate about crafting
              robust and scalable web applications. With 2 years of hands-on
              experience, I have thoroughly honed my skills in technologies such
              as React. I have a keen eye for detail, ensuring pixel-perfect
              designs and seamless, intuitive user interfaces. My goal is to
              leverage my expertise to create innovative solutions that drive
              business growth and deliver exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] lg:p-12 ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center justify-center bg-[#14141B] rounded-full"
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              src={image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
