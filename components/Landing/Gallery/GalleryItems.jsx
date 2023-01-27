import React, { useEffect, useRef } from "react";

import cn from "classnames";

import { useOnScreen } from "../../../helpers/helpers";

const GalleryItems = ({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) => {

  // useRef
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  // useEffect
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>

        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  )
};

export default GalleryItems;