import React from "react";

const Description = () => {
  return (
    <div className="description__container custom:gap-5 sm:gap-5 md:gap-5">
      <span className="description--text">
        We are <span className="font-bold"><span className="text-green-800">Jnce</span> Medical <br /> Clinic</span>
      </span>

      <span className="description--middle md:text-lg xl:text-3xl 2xl:text-3xl mx:text-5xl">
        Maintain excellence by a high qualified <br /> and competent medical staffs
      </span>

      <div className="bg-black w-1 h-[8rem] mr-2"></div>
      <span className="description--text">Inquire Now</span>
    </div>
  )
}

export default Description;