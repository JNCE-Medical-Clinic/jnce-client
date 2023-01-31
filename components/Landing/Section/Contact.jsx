import React from "react";

import Image from "../../Common/Image";

const Contact = () => {
  return (
    <div className="contact__container mx:max-w-[50%]">
      <Image
        src={`static/svg/contact.svg`} 
        alt="contact"
      />
      <span>Contact Us</span>
    </div>
  )
}

export default Contact;