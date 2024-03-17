import React from 'react'
 interface ButtonProps{
className: string
name:string
 }



const Button: React.FC<ButtonProps> = ({name,className}) => {
  return (
    <div>
      <button className={className} >{name}</button>
    </div>
  )
}

export default Button
