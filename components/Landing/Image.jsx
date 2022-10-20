import React from "react";

const Image = ({ src, type = "image/jpg", alt }) => {
  return (
    <picture>
      <img src={src} alt={alt} type={type} />
    </picture>
  );
};

export default Image;