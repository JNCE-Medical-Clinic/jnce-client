import React from "react";
import { useForm, Controller } from "react-hook-form";

import Image from "../../Common/Image";
import TextInput from "../../Common/TextInput";

const Contact = () => {
  const { control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      // service: [],
      message: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div id="contact" className="contact__container mx:max-w-[80%]">
      <Image
        src={`static/svg/contact.svg`} 
        alt="contact"
      />
      <div className="mt-40">
        <span>Contact Us</span>

        <div>
          <div className="contact__container--input mt-10">
            <div className="flex flex-col gap-4">
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput idName="full-name" type="text" label="Full Name" 
                    onChange={onChange} value={value} />
                )}
                name="fullName"
              />
              { errors.fullName && <div className="text-red-600"> Please enter your full name </div> }
            </div>
            
            <div className="flex flex-col gap-4">
              <Controller 
                control={control}
                rules={{ required: true, pattern: /^\S+@\S+.\S+$/ }}
                render={({ field: { onChange, value } }) => (
                  <TextInput idName="email" type="text" label="Email" 
                    onChange={onChange} value={value} />
                )}
                name="email"
              />
              { errors.email && <div className="text-red-600"> Please enter valid email address </div> }
            </div>
            
            <div className="flex flex-col gap-4">
              <Controller 
                control={control}
                rules={{ 
                  required: true, 
                  pattern: {
                    value: /^[0-9]+$/
                  },
                  maxLength: 12,
                  minLength: 11,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput idName="contact-number" type="text" label="Contact Number"
                    onChange={onChange} value={value} />
                )}
                name="phone"
              />
              { errors.phone && <div className="text-red-600"> Please enter valid phone number </div> }
            </div>

          </div>

          <div className="flex flex-col gap-4">
            <Controller 
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <div className="mt-12 flex flex-col gap-2">
                  <label htmlFor="concern" className="text-xl">Your Inquiry/Concern Message <small className="text-red-700">*</small></label>
                  <textarea id="concern" 
                    onChange={onChange} 
                    value={value} 
                    className="w-full text-xl p-2 rounded" rows="4" />
                </div>
              )}
              name="message"
            />
            { errors.message && <div className="text-red-600"> Please enter your message </div> }
          </div>
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className="mt-10 mb-40 text-3xl cursor-pointer bg-violet-700 px-4 py-5 text-white rounded"
        >Send your concern</button>
      </div>
    </div>
  )
}

export default Contact;