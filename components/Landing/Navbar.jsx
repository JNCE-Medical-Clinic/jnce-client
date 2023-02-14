import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "../Common/Image";

import { 
  MdOutlineLogin,
  MdMedicalServices,
  MdInfo,
  MdPhoneInTalk
} from "react-icons/md";
import { BiMenuAltRight } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  useEffect(() => {
    if (width < 961) {
      setToggleMenu(false)
    }
  }, [width])

  const handleToggle = function() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1,
        }}
        className="navbar__container bg-neutral-200 grid grid-cols-3 place-items-center relative p-6 whitespace-nowrap"
      >
        <div>
          <Image className="w-1/2" src={`static/images/jnce-logo.jpg`} alt="logo" />
        </div>

        {/* hide if not mobile layout */}
        <nav className="navbar__links font-semibold text-4xl">
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

        <div className="flex items-center gap-5">
          <Link href="/auth/login">
            <div className="cursor-pointer flex items-center">
              <MdOutlineLogin size={30} />
              <span className="ml-1 text-2xl font-semibold">Log In</span>
            </div>
          </Link>

          {/* mobile layout */}
          <div className="navbar__menu cursor-pointer">
            {toggleMenu ? (
              <>
                <IoIosClose
                  size={30}
                  onClick={handleToggle}
                />
              </>
            ) : (
              <>
                <BiMenuAltRight
                  size={30}
                  onClick={handleToggle}
                />
              </>
            )}
          </div>
        </div>
      </motion.div>

      {toggleMenu ? (
        <>
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 1 }}
            transition={{
              ease: "easeInOut",
            }}
            className="navbar__menu--container sticky bg-neutral-200 pb-14 drop-shadow-md max-w-[85%] -mt-8 z-10 w-screen overflow-hidden flex flex-col justify-center items-start"
          >
            <div className="navbar__menu--line w-full h-[0.1rem] bg-green-700"></div>
            <nav className="navbar__menu--links w-full mt-4 font-bold text-2xl ml-20 relative">
              <li className="mt-2 flex items-center gap-2">
                <MdMedicalServices size={30} color="green" />
                <a href="#services">Services</a>
              </li>

              <li className="mt-10 flex items-center gap-2">
                <MdInfo size={30} color="green" />
                <a href="#about">About</a>
              </li>

              <li className="mt-10 flex items-center gap-2">
                <MdPhoneInTalk size={30} color="green" />
                <a href="#contact">Contact Us</a>
              </li>
            </nav>
          </motion.div>
        </>
      ) : null}
    </div>
  )
}

export default Navbar;