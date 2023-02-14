import React from 'react';
import { motion } from "framer-motion";
import OtpInputs from '../Common/OtpInputs';

const VerifyOtp = ({ verifyOtp, otp, setOtp }) => {
  return (
    <div>
      <div className="my-8 text-center">
        <span className="text-5xl text-gray-800 font-semibold">
          Verification
        </span>
        <motion.p 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2}}
          className="step-description mt-5 text-gray-700">
          You will get a OTP via{" "}
          <span className="text-gray-800 font-semibold">
            SMS
          </span>
        </motion.p>
      </div>
      <div className="mt-20 grid place-items-center gap-6">
        <div>
          <OtpInputs 
            value={otp}
            onChange={(value) => setOtp(value)}
            numInputs={6}
            inputStyle={{
              width: '4rem',
              height: '4rem',
              fontWeight: 'bold',
              fontSize: '2rem',
              color: 'black',
            }}
          />
        </div>

        <button
          className="bg-gray-500 text-white text-2xl uppercase tracking-widest py-4 px-[11.5rem] cursor-pointer"
          onClick={verifyOtp}
        >
          Verify otp
        </button>
      </div>
    </div>
  )
}

export default VerifyOtp;