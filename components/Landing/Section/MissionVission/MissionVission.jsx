import React, { useEffect, useRef, useCallback } from "react";
import { useOnScreen } from "../../../../helpers/helpers";

export default function MissionVission({ title, description, updateActive, index }) {
  // useRef
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActive(index);
    }
  }, [onScreen, index]);

  return (
    <div
      ref={ref}
      className="slider h-screen flex flex-col justify-center w-[60%]"
    >
      <p className="slider-title">{title}</p>
      <span className="slider-description">{description}</span>
    </div>
  );
}