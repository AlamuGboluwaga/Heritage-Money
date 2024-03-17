import React from "react";
import Form from "../component/Form";
import Input from "../component/Input";
import Button from "../component/Button";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Define your submission logic here
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Enter Your Name" // Assuming this is meant to be "Enter Your Password"
          className=""
          required={true}
        />
        <Button className="login-button" name="Login" />
      </Form>
    </div>
  );
};

export default Login;
