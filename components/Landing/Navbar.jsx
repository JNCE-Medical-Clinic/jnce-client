import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "../Common/Image";

import { 
  MdOutlineLogin,
} from "react-icons/md";

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';

const Navbar = () => {
  // state management
  const [toggleMenu, setToggleMenu] = useState(false);

  // useEffect
  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener('resize', () => {
        let myWidth  = window.innerWidth;
        setToggle(myWidth)
     })
    }, [window])
  }


  useEffect(() => {
  }, [toggleMenu])

  const setToggle = (width) => {
    if (width > 1440) {
      setToggleMenu(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="app__navbar flex justify-center mb-20"
    >
      <div className="app__navbar--container w-full flex items-center justify-between">
        {/* logo */}
        <div className="app__navbar--logo">
          <Image
            src={`/static/images/jnce-logo.jpg`}
            alt="logo"
            className="mt-10 w-3/4 custom:w-2/4 xl:w-3/4 2xl:w-3/4 custom:ml-5 xl:ml-0 2xl:ml-0"
          />
        </div>

        {/* main nav */}
        <nav className="app__navbar--links flex w-full text-5xl font-semibold items-center justify-center absolute left-1/2">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </nav>

        {/* buttons */}
        <div className="app__navbar--buttons flex items-center absolute right-[15rem]">
          <Link href="/book-appointment">
            <div className="cursor-pointer text-3xl flex items-center gap-2 font-semibold">
              <MdOutlineLogin size={30} />
              Log In
            </div>
          </Link>
        </div>

        {/* toggle menu for small screen */}
        <div className="app__navbar--toggle custom:mr-10 sm:mr-10 lg:mr-0 custom:mt-5 sm:mt-5 lg:ml-0">
          {!toggleMenu && (
            <GiHamburgerMenu
            className="cursor-pointer"
            size={30}
            onClick={() => {setToggleMenu(!toggleMenu)}}
          />
          )}
          {toggleMenu && (
            <IoIosClose
              className="cursor-pointer"
              size={45}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar;