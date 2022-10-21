import React from "react";

const Image = ({ src, type = "image/jpg", alt, className }) => {
  return (
    <picture>
      <img src={src} alt={alt} type={type} className={className} />
    </picture>
  );
};

export default Image;