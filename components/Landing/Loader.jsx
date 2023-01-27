import React from "react";
import { motion } from "framer-motion";

import ImageCards from "./ImageCards";

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageCards variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image h-screen">
          <motion.img
            layoutId="main-image-1"
            src={`static/images/image-2.jpg`}
          />
        </motion.div>
        <ImageCards variants={item} id="image-3" />
        <ImageCards variants={item} id="image-4" />
        <ImageCards variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  );
};

// data
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

export default Loader
