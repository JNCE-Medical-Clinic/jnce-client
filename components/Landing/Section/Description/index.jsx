import React from "react";

import DescriptionHeader from "./DescriptionHeader";
import DescriptionFooter from "./DescriptionFooter";

const Description = () => {
  return (
    <div className="hero-container">
      <DescriptionHeader />
      <div className="hero-media">
        {/* <DescriptionCollage />
        <DescriptionMiddleImage /> */}
      </div>
      <DescriptionFooter />
    </div>
  )
}

export default Description;