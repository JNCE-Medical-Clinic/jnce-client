import React, { useState } from "react";
import Image from "../../components/Common/Image";

// component
import AuthHeader from "../../components/Auth/AuthHeader";
import Steps from "../../components/Common/Steps";
import GetOtp from "../../components/Auth/GetOtp";
import VerifyOtp from "../../components/Auth/VerifyOtp";
import StepsMobile from "../../components/Common/StepsMobile";

const Register = () => {
  const [counter, setCounter] = useState(0);

  const [otp, setOtp] = useState(null);

  const getOtp = (data) => {
    console.log(data.phone); // FOR API CALL
    setCounter(1);
  };

  const verifyOtp = () => {
    console.log("OTP: ", otp); // OTP CODE
    setCounter(2);
  };

  return (
    <>
      <AuthHeader />
      <br />
      <br />
      <br />

      <div className="custom:hidden sm:hidden md:hidden lg:block xl:block">
        <Steps counter={counter} />
      </div>

      <div className="custom:block sm:block md:block lg:hidden xl:hidden">
        <StepsMobile counter={counter} />
      </div>

      <div className="mt-5 grid place-items-center">
        <Image className="w-full" src={`/static/svg/phone.svg`} alt="contact" />

        {counter === 0 ? (
          <>
            <GetOtp getOtp={getOtp} />
          </>
        ) : (
          <>
            <VerifyOtp verifyOtp={verifyOtp} otp={otp} setOtp={setOtp} />
          </>
        )}
      </div>
    </>
  );
};

export default Register;
