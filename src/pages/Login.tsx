import React, { useState } from "react";
import Form from "../component/Form";
import Input from "../component/Input";
import Button from "../component/Button";

const Login: React.FC = () => {
const [userData,setUserData] =useState({
    name:'',
    email:''
})

console.log(userData);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Define your submission logic here 
  };

  return (
    <div className="flex flex-col justify-center items-right h-screen w-screen">
      <Form
        onSubmit={handleSubmit}
        className=" bg-green-100   border flex flex-col justify-center items-center h-[100vh] w-[50%] gap-8"
      >
        <div>
          <h1>Login</h1>
        </div>
        <Input
          type="text"
          placeholder="Enter your Name" // Assuming this is meant to be "Enter Your Password"
          className="border rounded-md p-2 outline-none  w-80"
          required={true}
          value={userData.name}
          onChange={(e: any) =>
            setUserData({ ...userData, name: e.target.value })
          }
        />
        <Input
          type="email"
          placeholder="Enter your Password" // Assuming this is meant to be "Enter Your Password"
          className="border rounded-md p-2 outline-none  w-80"
          required={true}
          value={userData.email}
          onChange={(e: any) =>
            setUserData({ ...userData, email: e.target.value })
          }
        />
        <Button className=" bg-green-500 rounded-md w-80 p-2" name="Login" />
      </Form>
    </div>
  );
};

export default Login;
