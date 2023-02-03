import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "./../../Common/Image";

import { MdDoubleArrow } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".services__container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () => "+=" + document.querySelector(".services__container")?.offsetWidth
      }
    });
  }, []);

  const [ref, inView] = useInView(
    {threshold: 0}
  )

  const [refDown, inViewDown] = useInView(
    {threshold: 0}
  )

  useEffect(() => {
    console.log(inViewDown)
    // scale up
    if (inView) {
      scaleUp.start({
        scaleX: 1,
      });
    }

    if (!inView) {
      scaleUp.start({
        scaleX: 0,
      });
    }

    // scale up
    if (inViewDown) {
      scaleDown.start({
        scaleX: 1,
      });
    }

    if (!inViewDown) {
      scaleDown.start({
        scaleX: 0,
      });
    }
  }, [scaleUp, scaleDown, inView, inViewDown]);

  const scaleUp = useAnimation();
  const scaleDown = useAnimation();

  return (
    <div className="services__container relative uppercase">
      <section ref={ref} className="panel panel-first">
        <div className="gap-20 panel-not-last">
          <div>
            <motion.div
              animate={scaleUp}
              transition={{type: 'spring', bounce: 0.1, delay: 0.5}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 -mt-20"
                src={`static/images/service-1.jpg`} alt="service-1" />
            </motion.div>

            <motion.div
              animate={scaleUp}
              transition={{type: 'spring', bounce: 0.1, delay: 0.6}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4"
                src={`static/images/service-2.jpg`} alt="service-2" />
            </motion.div>

            <motion.div
              animate={scaleUp}
              transition={{type: 'spring', bounce: 0.1, delay: 0.8}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 -mt-20" 
                src={`static/images/service-3.jpg`} alt="service-3" />
            </motion.div>
          </div>
          <p>Our <span className="text-green-700">Services</span></p>
          <div>
            <motion.div
              animate={scaleUp}
              transition={{type: 'spring', bounce: 0.1, delay: 0.5}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 mt-10"
                src={`static/images/service-1.jpg`} alt="service-1" />
            </motion.div>

            <motion.div
              animate={scaleUp}
              transition={{type: 'spring', bounce: 0.1, delay: 0.6}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4"
                src={`static/images/service-2.jpg`} alt="service-2" />
            </motion.div>

            <motion.div
              animate={scaleUp}
              transition={{type: 'spring', bounce: 0.1, delay: 0.8}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 mt-10" 
                src={`static/images/service-3.jpg`} alt="service-3" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="panel panel-second">
        <div className="gap-20 panel-not-last">
          <div>
            <motion.div
              animate={scaleDown}
              transition={{type: 'spring', bounce: 0.1, delay: 0}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 -mt-20"
                src={`static/images/service-1.jpg`} alt="service-1" />
            </motion.div>
            
            <motion.div
              animate={scaleDown}
              transition={{type: 'spring', bounce: 0.1, delay: 0.2}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4"
                src={`static/images/service-2.jpg`} alt="service-2" />
            </motion.div>
            
            <motion.div
              animate={scaleDown}
              transition={{type: 'spring', bounce: 0.1, delay: 0.3}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 -mt-20" 
                src={`static/images/service-3.jpg`} alt="service-3" />
            </motion.div>
            
          </div>
          <p><span className="text-green-700">Here</span> for you</p>
          <div>
            <motion.div
              animate={scaleDown}
              transition={{type: 'spring', bounce: 0.1, delay: 0}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 mt-10"
                src={`static/images/service-1.jpg`} alt="service-1" />
            </motion.div>

            <motion.div
              animate={scaleDown}
              transition={{type: 'spring', bounce: 0.1, delay: 0}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4"
                src={`static/images/service-2.jpg`} alt="service-2" />
            </motion.div>

            <motion.div
              animate={scaleDown}
              transition={{type: 'spring', bounce: 0.1, delay: 0}}
            >
              <Image
                className="custom:w-full sm:w-3/4 md:w-3/4 lg:w-[60%] xl:w-[65%] 2xl:w-3/4 mt-10" 
                src={`static/images/service-3.jpg`} alt="service-3" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="panel-scroll-arrow ml-20 gap-2">
        Scroll 
        <MdDoubleArrow className="animate-pulse rotate-180" size={35} />
        <MdDoubleArrow className="animate-pulse" size={35} />
      </div>

      <section ref={refDown} className="panel flex text-center items-center justify-center bg-zinc-200">
        <div className="panel-last flex flex-col gap-20">
          <div className="last-scroll flex items-center gap-8">
            <p>Laboratory Facility and <br /> Medical Consultation</p>
            <p>Electrocardiogram</p>
            <p>Ultrasound</p>
          </div>
          <div className="last-scroll flex items-center gap-8">
            <p>Dental Services</p>
            <p>Pre Employment and <br /> Seafarer's Medical Examination</p>
            <p>RTPCR Testing</p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        html,
        body {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        html {
          height: 100%;
          overflow-y: scroll;
        }

        body {
          position: relative;
          height: unset;
          overflow-x: hidden;
          overflow-y: visible;
        }

        h1,
        h2,
        p,
        li {
          max-width: 800px;
        }
      `}</style>
    </div>
  );
}

export default Services;