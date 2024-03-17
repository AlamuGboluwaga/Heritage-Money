import React, { HTMLInputTypeAttribute } from 'react'

interface InputProps{
type:string
placeholder:string
className:string
required:boolean
}



const Input: React.FC<InputProps> = ({type,placeholder,required,className
}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} required={required}  className={className} />
    </div>
  )
}

export default Input
