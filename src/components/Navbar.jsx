// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-6 mb-20 ">
        <div className="flex flex-shrink-0 items-center gap-[2px] cursor-pointer">
          <h1 className="text-4xl font-bold">A</h1>
          <h1 className="text-4xl font-bold text-[#6161a9]">j</h1>
        </div>
        <div className="m-8 flex justify-center items-center gap-4 text-2xl cursor-pointer">
          <a href="http://www.linkedin.com/in/arhum-javaid-8b1807285" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/arhumjavaid" target="_blank"><FaGithub /></a>
          <FaInstagram />
          <FaFacebookF />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
