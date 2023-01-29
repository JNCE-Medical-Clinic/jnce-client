import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import _ from "lodash"

export const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  // useEffect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin,
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};


export const handlePhoneNumberValidation = (phone) => {
    if(_.take(phone, 2).join("") != "63"){ return false }
    if(phone.length > 12){ return false }
    if(phone.length < 12){ return false }
    return true

}