// eslint-disable-next-line no-unused-vars
import React from "react";
import image1 from "../assets/portfolio.png";
import image2 from "../assets/bubble.png";
import image3 from "../assets/ochi.png";
import image4 from "../assets/blackjack.png";
import image5 from "../assets/netflix.png";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      image: image1,
      description:
        "This personal portfolio, built with React and Tailwind CSS, highlights my front-end skills with a modern, responsive design that adapts to all devices.",
      technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      title: "Bubble Game",
      image: image2,
      description:
        "Match the number at the top with a bubble before time runs out. Each correct match earns 10 points, and new bubbles appear with a fresh target number.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "OCHI Clone",
      image: image3,
      description:
        "The Ochi website showcases a minimalist design with smooth animations that enhance navigation. Subtle transitions create a visually engaging flow, adding to the modern aesthetic.",
      technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      title: "Blackjack Game",
      image: image4,
      description:
        "A simple Blackjack game where you start with two cards and try to reach a sum of 21. Draw cards to improve your total, with messages for game status.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Netflix Clone",
      image: image5,
      description:
        "Design a sleek, dark-themed UI with a hero section, content rows, and intuitive navigation. Focus on high-quality imagery, user-friendly playback, and modern typography.",
      technologies: ["HTML", "CSS"],
    },
  ];
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl tracking-tight">
        RECENT <span className="text-neutral-500">WORK</span>
      </h1>
      <div>
        {projects.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-[35%]">
              <img
                src={item.image}
                width={250}
                height={200}
                alt={item.title}
                className="mb-6 rounded-md"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{item.title}</h6>
              <p className="text-neutral-400 mb-4">{item.description}</p>
              <div className="mb-10">
              {item.technologies.map((tech, index) => (
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 " key={index}>{tech}</span>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
