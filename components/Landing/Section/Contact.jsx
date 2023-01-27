import React from "react";

import Image from "../../Common/Image";

const Contact = () => {
  return (
    <div className="flex my-20 custom:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-10">
      <div className="">
        <Image
          className="custom:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[375px] xl:w-[375px] 2xl:w-[375px]"
          src={`static/svg/contact.svg`}
          alt="contact"
        />
      </div>
      <div className="">
        <span className="text-6xl font-semibold">Contact Us</span>
      </div>
    </div>
  )
}

export default Contact;