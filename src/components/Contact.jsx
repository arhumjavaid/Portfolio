// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-900 bg-clip-text text-transparent"
      >
        GET IN TOUCH
      </motion.h1>
      <div className="flex flex-col justify-center items-center tracking-tighter text-xl">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-x-1"
        >
          <FaLocationDot size={30} />
          <h1>Karachi, Pakistan</h1>
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 border-b"
          href="https://api.whatsapp.com/send?phone=923332482067&text=Hello%20this%20is%20the%20starting%20message"
          target="_blank"
        >
          +92 333 2482067
        </motion.a>
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
