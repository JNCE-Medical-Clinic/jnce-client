import React from "react";

const TextInput = ({ label, idName, type, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={idName} className="text-xl">{label} <small className="text-red-700">*</small></label>
      <input type={type} id={idName} onChange={onChange} value={value} className="text-3xl p-2 rounded" />
    </div>
  )
}

export default TextInput;