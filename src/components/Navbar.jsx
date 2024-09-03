// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center py-8 mb-20 ">
        <div className="flex flex-shrink-0 items-center gap-[2px] cursor-pointer">
          <h1 className="text-4xl font-bold">A</h1>
          <h1 className="text-4xl font-bold text-[#6161a9]">j</h1>
        </div>
        <div className="links flex gap-10 text-neutral-200 relative">
          {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
            <>
              <a
                key={index}
                className={`underline-effect text-[1.125rem] font-[400] capitalize cursor-pointer transform hover:translate-y-[-10%] transition-transform duration-300 `}
              >
                <div className="overflow-hidden block ">
                  <div className="block max-md:hidden text-2xl">{item}</div>
                </div>
              </a>
            </>
          ))}
          {showNav ? (
            <div
              onClick={() => setShowNav(!showNav)}
              className="max-lg:hidden lg:hidden max-md:block relative"
            >
              {" "}
              <IoMdClose size={30} />
            </div>
          ) : (
            <div
              onClick={() => setShowNav(!showNav)}
              className="max-lg:hidden lg:hidden max-md:block"
            >
              {" "}
              <FiMenu size={30} />
            </div>
          )}
        </div>
      </nav>

      {showNav && (
        <div className="fixed inset-0 w-[68%] bg-[#1A1A25] text-white z-50 p-8 flex flex-col gap-8">
          <div className="flex flex-shrink-0 items-center gap-[2px] cursor-pointer mb-5">
            <h1 className="text-4xl font-bold">A</h1>
            <h1 className="text-4xl font-bold text-[#6161a9]">j</h1>
          </div>
          {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
            <a
              key={index}
              className="text-2xl font-light capitalize cursor-pointer hover:text-[#6161a9] transition-transform duration-300 "
              onClick={() => setShowNav(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
