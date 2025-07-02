import React from "react";
import MapEmbed from "./MapEmbed";
import ContactForm from "./ContactForm";
import { motion } from "motion/react";

const Footer = () => {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth'
    });
  }
};
  return (
    <>
      <div className="relative container max-w-full mx-auto lg:px-32 sm:px-12 px-5 bg-gray-200 border-y-2 border-black">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="m-auto text-center text-2xl font-bold border-b-2 py-2 max-w-full"
        >
          Contact Us
        </motion.h2>
        <div className="p-2 grid md:flex md:gap-2 justify-center md:justify-between mx-auto">
          <div className="left p-2 md:p-5 max-w-full mx-auto w-full md:h-96 md:w-1/2 border-0 md:border-r-2">
            <ContactForm />
          </div>
          <div className="right p-2 md:p-5 max-w-full mx-auto w-full md:h-96 md:w-1/2 border-0 md:border-l-2">
            <MapEmbed />
          </div>
        </div>
        <motion.div whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }} className="absolute bottom-10 right-10 bg-gray-500 p-2 rounded-full hover:cursor-pointer hover:bg-white"
          onClick={() => scrollToSection("slider")}>
          <img className="font-bold" src="src/assets/icons/up-arrow-svgrepo-com.svg" height="15px" width="15px" />
        </motion.div>
      </div>
    </>
  );
};
export default Footer;
