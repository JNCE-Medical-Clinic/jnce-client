import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Banner from "./Banner";
import Image from "../Common/Image";

import { 
  MdOutlineLogin,
  MdOutlineMedicalServices,
  MdInfoOutline
} from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';

const Navbar = ({ loading }) => {
  // state management
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="nav__container">
        {/* large screen */}
        <nav className="app__navbar flex justify-between">
          {/* logo */}
          <div className="app__navbar--logo">
            <Image 
              src={`/images/jnce-logo.jpg`}
              alt="logo_bg"
              className="h-3/4 custom:h-[35%] sm:h-[35%] md:h-[35%] lg:h-[50%] lg:mt-10 xl:h-3/4 xl:mt-0 2xl:h-3/4 2xl:mt-0"
            />
          </div>

          {/* main nav */}
          <div className="flex -mt-14 lg:-mt-20 xl:-mt-14 2xl:-mt-14 lg:mr-20 xl:mr-0 2xl:mr-0 ">
            <ul className="app__navbar--links gap-[10rem] text-4xl lg:text-[2rem] xl:text-4xl 2xl:text-4xl font-semibold items-center list-none custom:hidden sm:hidden md:hidden lg:flex lg:gap-[4rem] xl:flex xl:gap-[10rem] 2xl:flex 2xl:gap-[10rem]">
              <li className="cursor-pointer transition duration-500 active:animate-ping">
                <a href="#services">Services</a>
              </li>
              <li className="cursor-pointer transition duration-500 active:animate-ping">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer transition duration-500 active:animate-ping">
                <a href="#contactus">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* buttons */}
          <div className="app__navbar--buttons -mt-14 lg:-mt-20 xl:-mt-14 2xl:-mt-14 flex justify-end items-center gap-10 lg:gap-6 xl:gap-10 2xl:gap-10 custom:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex mx:flex">
            <Link href="/">
              <div className="bg-green-700 cursor-pointer text-white text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold p-5 rounded-md">
                Book Appointment
              </div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer flex items-center gap-2 text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold">
                <MdOutlineLogin size={30} />
                Log In
              </div>
            </Link>
          </div>

          {/* menu icon */}
          <div className="app_navbar--small mt-6 hidden custom:flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
            {!toggleMenu && (
              <GiHamburgerMenu
                className="cursor-pointer"
                onClick={() => setToggleMenu(true)}
                size={30}
              />
            )}
            {toggleMenu && (
              <IoIosClose
                onClick={() => setToggleMenu(false)}
                size={45}
                className="cursor-pointer -mt-2 ml-2"
              />
            )}
          </div>
        </nav>

        {/* small screen */}
        {toggleMenu && (
          <nav className="app__navbar--smallscreen fixed w-screen top-[12rem] h-screen z-50">
            <div>
              <ul className="app__navbar--smallscreen--links ml-20">
                <motion.li
                  initial={{ opacity: 0, y: '-1vh' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.25 }}
                  className="cursor-pointer flex gap-2 mb-5 items-center transition duration-500 active:animate-ping"
                >
                  <MdOutlineMedicalServices size={30} color="#15803d" />
                  <a href="#services" className="text-4xl font-semibold mt-1">Services</a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: '-1vh' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.25, delay: 0.1 }}
                  className="cursor-pointer flex gap-2 mb-5 transition duration-500 active:animate-ping"
                >
                  <MdInfoOutline size={30} color="#15803d" />
                  <a href="#about" className="text-4xl font-semibold mt-1">About</a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: '-1vh' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', duration: 0.75, bounce: 0.25, delay: 0.75 }}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="flex gap-2 transition duration-500 active:animate-ping">
                    <FiPhoneCall size={30} color="#15803d" />
                    <a href="#contactus" className="text-4xl font-semibold mt-1">Contact Us</a>
                  </div>
                  <div className="mr-24">
                    <Link href="/">
                      <div className="cursor-pointer flex items-center gap-2 text-3xl font-semibold transition duration-500 active:animate-ping">
                        <MdOutlineLogin size={30} />
                        Log In
                      </div>
                    </Link>
                  </div>
                </motion.li>
              </ul>
            </div>

            <hr className="bg-zinc-700 h-[3px] mt-10" />

            <div className="mt-4">
              <Link href="/">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="book-smallscreen cursor-pointer text-center w-[85%] bg-green-700 text-white text-2xl font-semibold py-5 rounded-3xl border-none outline-none"
                >
                  Book Appointment
                </motion.div>
              </Link>
            </div>
          </nav>
        )}
      </nav>

      {/* show if menu is not close */}
      {!toggleMenu && (
        <>
          <Banner toggleMenu={toggleMenu} />
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
    </>
  )
};

export default Navbar;