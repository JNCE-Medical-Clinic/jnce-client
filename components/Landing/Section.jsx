import React from "react";

import Services from "./Section/Services";
import About from "./Section/About";
import Contact from "./Section/Contact";

const Section = () => {
  return (
    <React.Fragment>
      <About />
      <Services />
      <Contact />
    </React.Fragment>
  )
}

export default Section;