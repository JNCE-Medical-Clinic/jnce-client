import React, { useEffect } from "react";

import { gsap } from "gsap/dist/gsap";

const DescriptionHeader = () => {
  // useEffect
  useEffect(() => {
    gsap.fromTo(
      ".description--text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 0.25,
      }
    )
  },[]);

  return (
    <div className="description__header font-semibold text-center text-[4vw]">
      <p className="description--text">We Are JNCE Medical & Diagnostic Clinic</p>
    </div>
  )
}

export default DescriptionHeader;