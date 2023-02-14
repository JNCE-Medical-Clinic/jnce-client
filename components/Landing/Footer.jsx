import React from "react";

import Image from "../Common/Image";

const Footer = () => {
  return (
    <div className="footer__container h-auto">
      {/* Top */}
      <div className="footer__header h-auto px-4 py-8 bg-green-700 flex justify-center">
        <div className="footer_header--detail w-3/5 flex justify-between custom:flex-col sm:flex-col md:flex lg:flex sm:gap-4 sm:justify-center sm:items-center custom:gap-4 custom:justify-center custom:items-center">
          <div className="footer__detail--assist text-white custom:text-center sm:text-center lg:text-left xl:text-left 2xl:text-left text-xs font-semibold flex flex-col custom:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
            <span>
              Need a Help for Check-up? Call for a
            </span>
            <span>
              Laboratory Services Now
            </span>

          </div>
          <div className="footer__detail--contact text-white text-xs font-semibold flex gap-4">
            <div className="flex flex-col">
              <div className="custom:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
                <span>jnceclinic@yahoo.com</span>
              </div>
              <div className="custom:text-base sm:text-base md:text-base lg:text-xl xl:text-xl 2xl:text-xl">
                <span>Tel. No. (63)2 8-5185156 | (63)2 5-3105256</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="footer__body h-auto px-8 py-12 bg-[#f6f6f9] text-slate-500 font-semibold flex justify-center">
        <div className="w-3/4">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                className="h-20 w-auto"
                alt="JNCE Logo"
                src={`static/images/jnce-logo.jpg`}
              />
            </div>
            <span className="text-2xl tracking-wide">
              We care about what you <br /> aim for
            </span>
            <div><span>&nbsp;</span></div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__copyright h-auto px-8 py-12 bg-[#f6f6f9] text-slate-500 font-semibold flex flex-col items-center justify-center custom:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
        <div className="footer__copyright--detail text-center"><span>Copyright &copy; 2010 JNCE Medical and Diagnostic Clinic. All Rights Reserved</span></div>
      </div>
    </div>
  )
}

export default Footer;