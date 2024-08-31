// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../assets/portfolio.png";
import image2 from "../assets/bubble.png";
import image3 from "../assets/ochi.png";
import image4 from "../assets/blackjack.png";
import image5 from "../assets/netflix.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      image: image1,
      description:
        "This personal portfolio, built with React and Tailwind CSS, highlights my front-end skills with a modern, responsive design that adapts to all devices.",
      technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
      src: "https://github.com/arhumj/Portfolio",
    },
    {
      title: "Bubble Game",
      image: image2,
      description:
        "Match the number at the top with a bubble before time runs out. Each correct match earns 10 points, and new bubbles appear with a fresh target number.",
      technologies: ["HTML", "CSS", "JavaScript"],
      src: "https://arhumjavaid.github.io/Bubble-Game/",
    },
    {
      title: "OCHI Clone",
      image: image3,
      description:
        "The Ochi website showcases a minimalist design with smooth animations that enhance navigation. Subtle transitions create a visually engaging flow, adding to the modern aesthetic.",
      technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
      src: "https://ochi-xi-three.vercel.app/"
    },
    {
      title: "Blackjack Game",
      image: image4,
      description:
        "A simple Blackjack game where you start with two cards and try to reach a sum of 21. Draw cards to improve your total, with messages for game status.",
      technologies: ["HTML", "CSS", "JavaScript"],
      src: "https://arhumjavaid.github.io/Blackjack-Game/"
    },
    {
      title: "Netflix Clone",
      image: image5,
      description:
        "Design a sleek, dark-themed UI with a hero section, content rows, and intuitive navigation. Focus on high-quality imagery, user-friendly playback, and modern typography.",
      technologies: ["HTML", "CSS"],
      src: "https://arhumjavaid.github.io/netflix/"
    },
  ];
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl tracking-tight"
      >
        RECENT <span className="text-neutral-500">WORK</span>
      </motion.h1>
      <div>
        {projects.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-[35%]"
            >
              <a href={item.src} target="_blank">
              <img
                src={item.image}
                width={250}
                height={200}
                alt={item.title}
                className="mb-6 rounded-md transform transition-transform hover:scale-105 duration-500 cursor-pointer"
              />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{item.title}</h6>
              <p className="text-neutral-400 mb-4">{item.description}</p>
              <div className="mb-10">
                {item.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 "
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
