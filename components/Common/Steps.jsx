import React from 'react'

import { BsCheckCircleFill } from 'react-icons/bs';

const Steps = ({ counter }) => {
  return (
    <div className="steps__container flex justify-center items-center text-2xl gap-10">
      <div className="flex items-center gap-4">
        <BsCheckCircleFill size={40} color={counter === 1 || counter === 2 ? 'green' : 'gray'} />
        <span>Getting OTP</span>
        <div className="w-[100px] bg-gray-600 h-[0.2rem]"></div>
      </div>

      <div className="flex items-center gap-4">
        <BsCheckCircleFill size={40} color={counter === 2 || counter === 3 ? 'green' : 'gray'} />
        <span>Verify OTP</span>
        <div className="w-[100px] bg-gray-600 h-[0.2rem]"></div>
      </div>

      <div className="flex items-center gap-4">
        <BsCheckCircleFill size={40} color={counter === 3 ? 'green' : 'gray'} />
        <span>Login Now</span>
        <div className="w-[100px] bg-gray-600 h-[0.2rem]"></div>
      </div>
    </div>
  )
}

export default Steps;