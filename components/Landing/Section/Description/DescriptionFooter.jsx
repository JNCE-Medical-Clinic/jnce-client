import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const DescriptionFooter = () => {
  // useRef
  const ref = useRef(null);

  // useEffect
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        scrub: true,
      },
    });
    tl.to(
      ".description__container",
      {
        backgroundColor: "#CFCFCF",
        duration: 0.25,
      },
      "-=2"
    );
  },[]);

  return (
    <div
      ref={ref}
      className="description__header font-semibold text-center text-[4vw]"
    >
      <p className="description--text">Quality Medical Service at Reasonable Cost</p>
    </div>
  )
}

export default DescriptionFooter;