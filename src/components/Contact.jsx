// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-900 bg-clip-text text-transparent">
        GET IN TOUCH
      </h1>
      <div className="flex flex-col justify-center items-center tracking-tighter text-xl">
        <p className="my-4 flex justify-center items-center gap-x-1">
          <FaLocationDot size={30} />
          <h1>Karachi, Pakistan</h1>
        </p>
        <a
          className="my-4 border-b"
          href="https://api.whatsapp.com/send?phone=923332482067&text=Hello%20this%20is%20the%20starting%20message"
          target="_blank"
        >
          +92 333 2482067
        </a>
        <a
          className="border-b "
          href="mailto:arhum.javaid@gmail.com"
          target="_blank"
        >
          arhum.javaid@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
