import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

import Image from "../../../Common/Image";

const Description = () => {
  const { ref, inView } = useInView({
    threshold: 0.25
  });

  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const fade = useAnimation();

  useEffect(() => {
    if (inView) {
      fade.start({
        opacity: 1
      });
      animationLeft.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
      animationRight.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }

    if (!inView) {
      fade.start({
        opacity: 0
      });
      animationLeft.start({
        x: '-100px',
      });
      animationRight.start({
        x: '100px'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div>
      {/* Top */}
      <div className="description__header font-semibold text-center text-[6vw]">
        <p className="description--text">We Are <span className="text-green-800">JNCE</span> Medical & Diagnostic Clinic</p>
      </div>

      {/* Middle */}
      <div className="mt-40 grid grid-cols-2 place-items-center">
        <div ref={ref} className="about__mission">
          <motion.h1 
            animate={animationRight} 
            className="custom:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-center font-bold"
          >
            Quality Policy
          </motion.h1>
          <motion.p 
            animate={fade} 
            className="ml-5 custom:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl indent-8 mt-4 text-center italic leading-10"
          >
            "JNCE Medical and Diagnostic Clinic shall strive to satisfy our clients <br /> by providing them quality medical service at reasonable cost. <br />
            We shall continually strive to maintaiin excellence by maintaining a high qualified, <br /> efficient and competent medical staffs.
          </motion.p>
        </div>
        <div className="about_mission--img ml-2">
          <Image
            className="custom:w-3/4 sm:w-3/4 md:w-3/4 lg:w-[200px] xl:w-[200px] 2xl:w-[350px]"
            src={`/static/svg/mission.svg`}
            alt="mission svg"
          />
        </div>
      </div>
      <div className="my-40 grid grid-cols-2 place-items-center">
        <div className="about_vision--img">
          <Image
            className="custom:w-3/4 sm:w-3/4 md:w-3/4 lg:w-[200px] xl:w-[200px] 2xl:w-[350px]"
            src={`/static/svg/vision.svg`} 
            alt="vision svg" 
          />
        </div>
        <div ref={ref} className="about__vision">
          <motion.h1 
            animate={animationLeft} 
            className="custom:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-center font-bold"
          >
            Quality Objectives
          </motion.h1>
          <motion.p 
            animate={fade} 
            className="mr-5 custom:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl indent-8 mt-4 text-center italic leading-10"
          >
            "To satisfy clients thru prompt delivery of medical services <br /> To delivery PEME results within 24 hours <br /> after completion of required PEME package." <br />
            To comply 100% to legal regulatory requirement for medical clinics. <br /> To control repartriation rate not to exceed 0.1% annually.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Description;