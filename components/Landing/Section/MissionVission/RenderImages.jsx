import React from "react";

import cn from 'classnames';

export default function RenderImages({ sliderData, activeIndex}) {
  return sliderData.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ))
}