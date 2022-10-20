import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import BannerRowTop from "./BannerPositions/BannerRowTop"
import BannerRowCenter from "./BannerPositions/BannerRowCenter"
import BannerRowBottom from "./BannerPositions/BannerRowBottom"

const Banner = () => {
  // state management
  const [playMarquee, setPlayMarquee] = useState(false);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop title={"JNCE"} />
      <BannerRowCenter title={"Medical"} playMarquee={playMarquee} />
      <BannerRowBottom title={"Clinic"} />
    </motion.div>
  )
};

// data

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default Banner;