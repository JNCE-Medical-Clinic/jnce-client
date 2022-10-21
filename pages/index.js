import { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Navbar from "../components/Landing/Navbar";
import Loader from "../components/Landing/Loader";

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
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  )
}
