// eslint-disable-next-line no-unused-vars
import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-6 mb-20 ">
        <div className="flex flex-shrink-0 items-center gap-[2px] cursor-pointer">
          <h1 className="text-4xl font-bold">A</h1>
          <h1 className="text-4xl font-bold text-[#6161a9]">j</h1>
        </div>
        <div className="links flex gap-10 text-neutral-200">
          {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
            <a
              key={index}
              className={`underline-effect text-[1.125rem] font-[400] capitalize cursor-pointer transform hover:translate-y-[-10%] transition-transform duration-300 `}
            >
              <span className="overflow-hidden block relative">
                <span className="block">{item}</span>
              </span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
