import React from "react";
import { motion } from "framer-motion";

import Image from "../Common/Image";

const ImageCards = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  )
};

export default ImageCards;