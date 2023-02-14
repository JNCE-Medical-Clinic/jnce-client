import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { handlePhoneNumberValidation } from '../../helpers/helpers';
import ContactInput from '../Common/ContactInput';

const GetOtp = ({ getOtp }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: null,
    },
  });

  return (
    <div>
      <div className="my-8 text-center">
        <span className="text-5xl text-gray-800 font-semibold">
          Verification
        </span>
        <p className="step-description mt-5 text-gray-700">
          We will send you a{" "}
          <span className="text-gray-800 font-semibold">
            One Time Password
          </span>
        </p>
        <p className="step-description text-gray-700">on your phone number</p>
      </div>
      <div className="mt-20 grid place-items-center gap-6">
        <div>
          <Controller
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                return handlePhoneNumberValidation(value);
              },
            }}
            render={({ field: { onChange, value } }) => (
              <ContactInput value={value} onChange={onChange} />
            )}
            name="phone"
          />
          {errors.phone && (
            <div className="text-red-600 text-lg text-center mt-2">
              {" "}
              Please enter a valid phone number{" "}
            </div>
          )}
        </div>
        
        <button
          className="bg-gray-500 text-white text-2xl uppercase tracking-widest py-4 px-[11.5rem] cursor-pointer"
          onClick={handleSubmit(getOtp)}
        >
          Get otp
        </button>
      </div>
    </div>
  )
}

export default GetOtp;