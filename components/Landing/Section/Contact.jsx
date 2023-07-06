import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../services/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";

import Image from "../../Common/Image";
import TextInput from "../../Common/TextInput";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errorSubmitting, setErrorSubmitting] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { control, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const notify = () => toast.success("Message submitted successfully!");
  const notifyError = () => toast.error("Error submtting message");

  const onSubmit = async (input) => {
    setLoading(true);

    const full_name = input?.fullName
    const email = input?.email
    const contact_no = input?.phone
    const message = input?.message

    const { data, error } = await supabase
      .from('contact_us')
      .insert([
        {
          full_name,
          email,
          contact_no,
          message
        }
      ]);

      setLoading(true);

      if (error) {
        setLoading(false);
        setErrorSubmitting(true);
        notifyError();
      } else {
        setLoading(false);
        setSubmitting(true);
        notify();
      }
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

        {loading ? (
          <>
            <div className="mt-10 mb-40">
              <SyncLoader
                color="#15803d"
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={handleSubmit(onSubmit)}
              className="mt-10 mb-40 text-3xl cursor-pointer bg-violet-700 px-4 py-5 text-white rounded"
            >Send your concern</button>
          </>
        )}

        {submitting &&
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        }

        {errorSubmitting &&
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        }
      </div>
    </div>
  )
}

export default Contact;