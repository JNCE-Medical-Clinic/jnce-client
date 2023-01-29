import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Loader from "../components/Landing/Loader";
import Navbar from "../components/Landing/Navbar";
import Banner from "../components/Landing/Banner";
import Section from "../components/Landing/Section";
import Footer from "../components/Landing/Footer";
import ScrollTopArrow from "../components/Common/ScrollTopArrow";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  // state management
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 5000);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <ScrollTopArrow />

              {/* navbar */}
              <Navbar loading={loading} />

              {/* banner */}
              <Banner />

              {!loading && (
                <div className="transition-image final">
                  <motion.img
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    src={`static/images/image-2.jpg`}
                    layoutId="main-image-1"
                  />
                </div>
              )}

              {/* section */}
              <Section />

              {/* footer */}
              <Footer />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
  );
}
