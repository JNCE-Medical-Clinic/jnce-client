import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Image from "../../Common/Image";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".gallery-items");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".gallery-container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => "+=" + document.querySelector(".gallery-container").offsetWidth
      }
    });
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  const scaleUp = useAnimation();
  const scaleDown = useAnimation();
  const fadeFromLeft = useAnimation();

  useEffect(() => {
    // if seen on screen
    if (inView) {
      scaleUp.start({
        opacity: 1,
        scaleX: 1,
      });

      scaleDown.start({
        opacity: 0,
        scaleX: 0,
      });

      fadeFromLeft.start({
        opacity: 0,
        x: '-25vw',
      });
    }

    // if not seen on screen
    if (!inView) {
      scaleUp.start({
        opacity: 0,
        scaleX: 0,
      });

      scaleDown.start({
        opacity: 1,
        scaleX: 1,
      });

      fadeFromLeft.start({
        opacity: 1,
        x: '0vw',
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="gallery-container flex flex-nowrap w-[300%] h-screen custom:text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-500 p-5 font-semibold">
      {/* First Scroll */}
      <section className="gallery-items flex flex-col relative items-center justify-center w-screen h-full text-center">
        <div ref={ref} className="top-images flex items-center gap-[17.5rem] custom:gap-8 sm:gap-7">
          <motion.div
            animate={scaleUp}
            transition={{type: 'spring', bounce: 0.1, delay: 0}}
          >
            <Image 
              src={'images/image-1.jpg'}
              className="custom:w-[200px] sm:w-[200px] 2xl:w-[320px] custom:h-[300px] sm:h-[300px] 2xl:h-[350px] -mt-[12.5rem]"
            />
          </motion.div>

          <motion.div
            animate={scaleUp}
            transition={{type: 'spring', bounce: 0.1, delay: 0.2}}
          >
            <Image
              src={'images/image-3.jpg'}
              className="custom:w-[300px] sm:w-[300px] 2xl:w-[352px] custom:h-[325px] sm:h-[325px] 2xl:h-[375px]"
            />
          </motion.div>

          <motion.div
            animate={scaleUp}
            transition={{type: 'spring', bounce: 0.1, delay: 0.3}}
          >
            <Image
              src={'images/image-4.jpg'}
              className="w-[200px] h-[250px]"
            />
          </motion.div>
        </div>
        <div className="text my-10">
          <p className="custom:text-7xl sm:text-7xl md:text-7xl lg:text-[8rem] xl-text-[13rem] 2xl:text-[14rem] font-bold custom:tracking-[1rem] sm:tracking-[2rem] md:tracking-[2.75rem] lg:tracking-[2.5rem] xl:tracking-[3rem] 2xl:tracking-[3.75rem] uppercase whitespace-nowrap">
            Our <span className="text-green-700">Services,</span>
          </p>
        </div>
        <div className="bot-images flex items-center gap-[20rem] custom:gap-1 sm:gap-1">
          <motion.div
            animate={scaleUp}
            transition={{type: 'spring', bounce: 0.1, delay: 0.2}}
          >
            <Image 
              src={'images/service-1.jpg'}
              className="custom:w-[200px] sm:w-[200px] 2xl:w-[300px] h-[350px]"
            />
          </motion.div>

          <motion.div
            animate={scaleUp}
            transition={{type: 'spring', bounce: 0.1, delay: 0.15}}
          >
            <Image 
              src={'images/service-2.jpg'}
              className="custom:w-[150px] sm:w-[150px] 2xl:w-[200px] h-[200px] custom:ml-5 sm:ml-5 2xl:ml-[20rem] -mt-[12.5rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* Second Scroll */}
      <section className="gallery-items flex flex-col relative items-center justify-center w-screen h-full text-center">
        <div className="top-images flex items-center gap-[17.5rem] custom:gap-8 sm:gap-7">
          <motion.div
            animate={scaleDown}
            transition={{type: 'spring', bounce: 0.1, delay: 0}}
          >
            <Image 
              src={'images/service-3.jpg'}
              className="custom:w-[200px] sm:w-[200px] 2xl:w-[320px] custom:h-[300px] sm:h-[300px] 2xl:h-[350px] -mt-[12.5rem]"
            />
          </motion.div>
          
          <motion.div
            animate={scaleDown}
            transition={{type: 'spring', bounce: 0.1, delay: 0.1}}
          >
            <Image 
              src={'images/service-4.jpg'}
              className="custom:w-[300px] sm:w-[300px] 2xl:w-[352px] custom:h-[325px] sm:h-[325px] 2xl:h-[375px]"
            />
          </motion.div>

          <motion.div
            animate={scaleDown}
            transition={{type: 'spring', bounce: 0.1, delay: 0.2}}
          >
            <Image 
              src={'images/service-5.jpg'}
              className="w-[200px] h-[250px]"
            />
          </motion.div>
        </div>
        <div className="text my-10">
          <p className="custom:text-7xl sm:text-7xl md:text-7xl lg:text-[8rem] xl-text-[13rem] 2xl:text-[14rem] font-bold custom:tracking-[1rem] sm:tracking-[2rem] md:tracking-[2.75rem] lg:tracking-[2.5rem] xl:tracking-[3rem] 2xl:tracking-[3.75rem] uppercase whitespace-nowrap">
            JNCE <span className="text-green-700 z-[9999]">To You</span>
          </p>
        </div>
        <div className="bot-images flex items-center gap-[20rem] custom:gap-1 sm:gap-1">
          <motion.div
            animate={scaleDown}
            transition={{type: 'spring', bounce: 0.1, delay: 0.1}}
          >
            <Image 
              src={'images/service-6.jpg'}
              className="custom:w-[200px] sm:w-[200px] 2xl:w-[300px] h-[350px]"
            />
          </motion.div>

          <motion.div
            animate={scaleDown}
            transition={{type: 'spring', bounce: 0.1, delay: 0.2}}
          >
            <Image 
              src={'images/service-7.jpg'}
              className="custom:w-[150px] sm:w-[150px] 2xl:w-[200px] h-[200px] custom:ml-5 sm:ml-5 2xl:ml-[20rem] -mt-[12.5rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* Last Scroll */}
      <section className="gallery-items text-black flex flex-col gap-[10rem] relative items-center justify-center w-screen h-full bg-gradient-to-r from-[#e7e7e7] via-gray-200 to-[#e7e7e7]">
        <motion.div
          animate={fadeFromLeft}
          transition={{type: 'spring', bounce: 0.1, delay: 0.35, duration: 1.5}} 
          className="flex custom:flex-col sm:flex-col md:flex-col 2xl:flex-row items-center custom:text-center sm:text-center md:text-center lg:text-left gap-20"
        >
          <p>Laboratory Facility and <br /> Medical Consultation</p>
          <p>Electrocardiogram</p>
          <p>Ultrasound</p>
        </motion.div>

        <motion.div
          animate={fadeFromLeft}
          transition={{type: 'spring', bounce: 0.1, delay: 0.35, duration: 1.5}} 
          className="flex custom:flex-col sm:flex-col md:flex-col 2xl:flex-row items-center custom:text-center sm:text-center md:text-center lg:text-left gap-20"
        >
          <p>Dental Services</p>
          <p>Pre Employment and <br /> Seafarer's Medical Examination</p>
          <p>RTPCR Testing</p>
        </motion.div>

        <div className="absolute">

        </div>
      </section>
    </div>
  )
}

export default Services;