import React from 'react';
import OtpInput from 'react-otp-input';

const OtpInputs = ({ value, onChange, inputStyle, numInputs, containerStyle }) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      inputStyle={inputStyle}
      containerStyle={containerStyle}
      numInputs={numInputs}
      separator={<span>-</span>}
    />
  )
}

export default OtpInputs;