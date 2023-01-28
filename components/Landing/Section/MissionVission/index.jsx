import React, { useState, useEffect, useRef } from "react";
import MissionVission from "./MissionVission";

import { gsap } from "gsap/dist/gsap";
import RenderImages from "./RenderImages";

export default function MissionVisionSection() {
  // state management
  const [activeFeature, setActiveFeature] = useState(0);

  // useRef
  const sliderRef = useRef(null);
  const sliderRightRef = useRef(null);

  // useEffect
  useEffect(() => {
    const stopTrigger = () => {
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: sliderRightRef.current,
          start: "top top",
          end: () => `+=${sliderRightRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return timeLine;
    }

    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);

  return (
    <div
      ref={sliderRef}
      className="slider__container grid bg-white"
    >
      <div className="slider__container--left">
        {sliderData.map((data, index) => (
          <MissionVission
            title={data.title}
            description={data.description}
            key={data.imageUrl}
            index={index}
            updateActive={setActiveFeature}
          />
        ))}
      </div>

      <div
        ref={sliderRightRef}
        className="slider__container--right h-screen overflow-hidden relative"
      >
        <RenderImages 
          sliderData={sliderData}
          activeIndex={activeFeature}
        />
      </div>
    </div>
  );
}

// data

const sliderData = [
  {
    title: "Our Mission",
    description: "To render quality medical service to satisfy our client's needs. To maintain excellence and professionalism in the delivery of medical service in accordance with the national and international standards.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
  },
  {
    title: "Our Vision",
    description: "JNCE Medical and Diagnostic Clinic envisions to become a high-standard provider of pre-employment medical services for local and overseas workers.",
    imageUrl: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
  }
]