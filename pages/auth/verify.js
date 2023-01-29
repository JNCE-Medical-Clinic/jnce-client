import React, { useState } from 'react'


//Components
import OtpInputs from '../../components/Common/OtpInputs'
// import OtpInput from 'react-otp-input';

const Verify = () => {
  const [otp, setOTP] = useState(null)

  const handleVerifyOTP = () => {
    console.log("OTP:", otp) // OTP CODE
  }

  return (
    <div className='h-screen grid place-items-center'>
      <div className='grid place-items-center gap-12'>
        <OtpInputs 
          value={otp}
          onChange={(value) => setOTP(value)}
          numInputs={6}
          inputStyle={{
            width: '4rem',
            height: '4rem',
            fontWeight: 'bold',
            fontSize: '2rem'
          }}
        />
        <button 
          className='bg-gray-400 p-4'
          onClick={handleVerifyOTP}
        >
          <label>Verify OTP</label>
        </button>
      </div>
    </div>
  )
}

export default Verify