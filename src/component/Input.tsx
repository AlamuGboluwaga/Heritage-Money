import React, { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  type: string;
  placeholder: string;
  className: string;
  required: boolean;
  onChange: React.FormEventHandler;
  value:any
}



const Input: React.FC<InputProps> = ({type,placeholder,required,className,onChange,value
}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} required={required}  className={className} onChange={onChange} value={value} />
    </div>
  )
}

export default Input
