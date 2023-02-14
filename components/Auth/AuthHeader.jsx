import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "../Common/Image";

const AuthHeader = () => {
  return (
    <div>
      <br /><br />

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0,
        }}
        className="auth__header relative flex justify-between items-center"
      >
        <div>
          <Link href="/">
            <div>
              <Image className="w-1/2 cursor-pointer" src={`/static/images/jnce-logo.jpg`} alt="logo" />
            </div>
          </Link>
        </div>
        <div>
          <span className="font-semibold">JNCE Medical & Diagnostic Clinic</span>
        </div>
      </motion.header>

      <br /><br />

      <div className="auth__line h-[0.1rem] bg-gray-400 drop-shadow-xl"></div>
    </div>
    
  )
}

export default AuthHeader;