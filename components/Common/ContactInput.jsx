import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactInput = ({ value, onChange, containerStyle, inputStyle }) => {
  return (
      <PhoneInput
        inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true
        }}
        inputStyle={inputStyle}
        containerStyle={containerStyle}
        country={'ph'}
        onlyCountries={["ph"]}
        disableDropdown
        placeholder='Enter phone number'
        value={value}
        onChange={onChange}
    />
  )
}

export default ContactInput