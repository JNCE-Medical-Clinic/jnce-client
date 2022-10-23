import { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Navbar from "../components/Landing/Navbar";
import Loader from "../components/Landing/Loader";
import Banner from "../components/Landing/Banner";

export default function Home() {
  // state management
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <div>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Navbar loading={loading} />
              <Banner />
              {!loading && (
                <div className='transition-image final'>
                  <motion.img
                    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                    src={`/images/image-2.jpg`}
                    layoutId='main-image-1'
                  />
                </div>
              )}
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  )
}
