import React from 'react'

// component
import { useForm, Controller } from 'react-hook-form'
// import { handlePhoneNumberValidation } from '../../helpers/helpers'
import { handlePhoneNumberValidation } from '../../helpers/helpers'
import ContactInput from '../../components/Common/ContactInput'

const Login = () => {

    const { control, handleSubmit, formState : { errors } }  = useForm({
        defaultValues : {
            phone : null,
        }
    })
    const onsubmit = (data) => {
        console.log(data.phone) // FOR API CALL
    }
    return (
        <div className='h-screen grid place-items-center'>
            <div className='grid place-items-center gap-4'>
                <Controller 
                    control={control}
                    rules={{
                        required: true,
                        validate: (value) => {
                           return handlePhoneNumberValidation(value)
                        }
                    }}
                    render={( { field: { onChange, value } }) => (
                        <ContactInput 
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