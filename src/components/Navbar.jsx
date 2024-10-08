// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const routes = ["/", "/about", "/Projects", "/Contact"];
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
              <button
                key={index}
                onClick={() => navigate(routes[index])}
                className={`underline-effect text-[1.125rem] font-[400] capitalize cursor-pointer transform hover:translate-y-[-10%] transition-transform duration-500 ${
                  location.pathname === routes[index]
                    ? "border-b-4 border-[#565697] "
                    : ""
                }`}
              >
                <div className="overflow-hidden block ">
                  <div className="block max-md:hidden text-2xl ">{item}</div>
                </div>
              </button>
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
      <div
        className={`fixed top-0 left-0 w-[68%] h-screen bg-[#1A1A25] text-white z-50 p-8 flex flex-col gap-8 transition-transform duration-500 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-shrink-0 items-center gap-[2px] cursor-pointer mb-5">
          <h1 className="text-4xl font-bold">A</h1>
          <h1 className="text-4xl font-bold text-[#6161a9]">j</h1>
        </div>
        {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
          <button
            key={index}
            className={`text-2xl font-light capitalize cursor-pointer ${
              location.pathname === routes[index]
                ? "underline underline-offset-8 decoration-4 decoration-[#6161a9]"
                : ""
            }`}
            onClick={() => {
              setShowNav(false);
              navigate(routes[index]);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
