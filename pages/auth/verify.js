import React, { useState } from 'react'

import OtpInput from 'react-otp-input';

const Verify = () => {
  const [otp, setOTP] = useState(null)
  return (
    <div className='h-screen grid place-items-center'>
      <OtpInput
        value={otp}
        onChange={(value) => setOTP(value)}
        inputStyle={{
          padding: '2rem',
          
        }}
        numInputs={6}
        separator={<span>-</span>}
      />
    </div>
  )
}

export default Verify