
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(true);
  return (
    <>
      <nav className="flex justify-between items-center py-8 mb-20 relative"> 
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
              <div className="overflow-hidden block relative">
                <div className="block max-md:hidden text-2xl">{item}</div>
              </div>
            </a>
          ))}
        </div>
        {!showNav ?  (
          <div className="relative">
          <div onClick={() => setShowNav(!showNav)} className="max-lg:hidden lg:hidden max-md:block">
            {" "}
            <IoMdClose size={30} />
          </div>
          <div className="absolute top-0 left-0 w-3/2 h-screen bg-neutral-900">

          </div>
          </div>
          
        ) : (
          <div
            onClick={() => setShowNav(!showNav)}
            className="max-lg:hidden lg:hidden max-md:block"
          >
            {" "}
            <FiMenu size={30} />
          </div>
        ) }
      </nav>
    </>
  );
};

export default Navbar;
