import React from 'react'

const StepsMobile = ({ counter }) => {
  return (
    <div className="flex justify-center items-center text-center text-2xl gap-10">
      <div className="flex flex-col gap-4">
        <span className={counter === 1 || counter === 2 ? 'text-green-800' : ''}>Getting OTP</span>
        <div className={`w-[100px] h-[0.4rem] rounded-md ${counter === 1 || counter === 2 ? 'bg-green-800' : 'bg-gray-800'}`}></div>
      </div>

      <div className="flex flex-col gap-4">
        <span className={counter === 2 || counter === 3 ? 'text-green-800' : ''}>Verify OTP</span>
        <div className={`w-[100px] h-[0.4rem] rounded-md ${counter === 2 || counter === 3 ? 'bg-green-800' : 'bg-gray-800'}`}></div>
      </div>

      <div className="flex flex-col gap-4">
        <span className={counter === 3 ? 'text-green-800' : ''}>Login Now</span>
        <div className={`w-[100px] h-[0.4rem] rounded-md ${counter === 3 ? 'bg-green-800' : 'bg-gray-800'}`}></div>
      </div>
    </div>
  )
}

export default StepsMobile;