
import React, { useState, useEffect } from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FaArrowCircleUp
        onClick={scrollTop}
        fontSize={60}
        className="scrollTop fixed right-[50px] bottom-[10%] cursor-pointer z-[1000] transition duration-75 active:animate-ping"
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
      <style jsx>
        {`
          .scrollTop {
            animation: fadeIn 0.3s;
            transition: opacity 0.4s;
            opacity: 1;
          }
          .scrollTop:hover {
            opacity: 1;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  )

}

export default ScrollTopArrow;