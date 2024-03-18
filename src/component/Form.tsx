import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void 
  children?:React.ReactNode
  className:string
 
}

const Form: React.FC<FormProps> = ({children, onSubmit ,className}) => {
  return <form onSubmit={onSubmit} className={className}>{children}</form>;
};

export default Form;
