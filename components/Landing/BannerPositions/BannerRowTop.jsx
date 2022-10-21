import React from "react";
import { motion } from "framer-motion";

import AnimatedLetters from "./AnimatedLetters";

const BannerRowTop = ({ title, toggleMenu }) => {
  return (
    <div className="banner-row -mt-10">
      <div className='row-col'>
        <AnimatedLetters title={title} toggleMenu={toggleMenu} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <h1 
          className="text-5xl font-semibold"
        >
          Accuracy and Quality <br /> Need
          <span className="text-green-800 font-bold">{" "}Not</span> to be 
          <span className="text-green-800 font-bold">{" "}Expensive</span>
        </h1>
      </motion.div>
    </div>
  )
};

export default BannerRowTop;