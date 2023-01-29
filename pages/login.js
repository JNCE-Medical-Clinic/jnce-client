import React, { useState, useEffect } from 'react'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Login = () => {

    
    // useEffect(() => {
    //     console.log("Value: ", value)
    // }, [value])

    const [value, setValue] = useState(null)
    return (
        <div className='h-24 bg-gray-200 flex justify-center align-center'>
            <PhoneInput
                international
                defaultCountry='PH'
                placeholder="Enter phone number"
                value={value}   
                onChange={setValue}
            />     
        </div>
    )
}

export default Login