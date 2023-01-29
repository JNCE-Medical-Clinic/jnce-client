import React, { useEffect } from 'react'

// component
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Login = () => {

    const { control, handleSubmit, getValues, watch, formState : { errors } }  = useForm({
        defaultValues : {
            phone : null,
        }
    })
    const onsubmit = (data) => {
        console.log("phone: ", data.phone.slice(2))
        console.log("length: ", data.phone.slice(2).length)
    }
    return (
        <div className='bg-gray-300 h-screen grid place-items-center'>
            <div className='grid place-items-center gap-4'>
                <Controller 
                    control={control}
                    rules={{
                        required: true,
                        // pattern : /^[0-9*\+]+$/
                        
                    }}
                    render={( { field: { onChange, value } }) => (
                        <PhoneInput
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                            country={'ph'}
                            onlyCountries={["ph"]}
                            disableDropdown
                            placeholder='Enter phone number'
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    name="phone"
                    />
                { errors.phone && <div className='text-red-600'> Please enter a valid phone number </div> }
                <button 
                    className='bg-gray-400 p-4'
                    onClick={handleSubmit(onsubmit)}
                >
                    <label className='text-white'>
                        Send otp
                    </label>
                </button>
            </div>
        </div>
    )
}   

export default Login