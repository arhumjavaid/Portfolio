// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import image from "../assets/kevinRushProfile.png";
import image from "../assets/person.png";
const Hero = () => {
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
            <h1 className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Arhum Javaid
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Front-End Developer
            </span>
            <h2 className="text-4xl mt-3 font-extralight">
              I PROVIDE
              <span
                className="uppercase bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-bold pl-2"
                ref={typedRef}
              ></span>
            </h2>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              As a front-end developer, I am deeply passionate about crafting
              robust and scalable web applications. With 2 years of hands-on
              experience, I have thoroughly honed my skills in technologies such
              as React. I have a keen eye for detail, ensuring pixel-perfect
              designs and seamless, intuitive user interfaces. My goal is to
              leverage my expertise to create innovative solutions that drive
              business growth and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] lg:p-12 ">
          <div className="flex items-center justify-center bg-[#14141B] rounded-full">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
