import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const dollar =
  "https://i.pinimg.com/564x/5d/a0/a1/5da0a1c3b592215bff4db35d9881d250.jpg";
const steps:string[] = ["Step 1", "Step 2", "Step 3"];

const Home:React.FC = () => {
  const [state, setState] = useState<JSX.Element|null>(null);
  const handleClick = (index: number) => {
    console.log("INDEX", index);

    return `${
      index === 0
        ? setState(<Step1/>)
        : index === 1
        ? setState(<Step2/>)
        : index === 2
        ? setState(<Step3/>)
        : null
    }`;
  };

  return (
    <div className=" h-[200vh] w-screen flex flex-col ">
      <Navbar />

      <div
        className="bg-green-400 bg-center  h-[30vh] w-90%]flex flex-row flex-wrap justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/5d/a0/a1/5da0a1c3b592215bff4db35d9881d250.jpg')",
        }}
      >
        <div className="bg-green-500 bg-opacity-20   h-full w-full flex justify-center items-center">
          <h1 className="text-white font-extrabold  ">HERITAGE MONEY</h1>
        </div>
      </div>
      <div className="flex flex-col h-[152vh] w-[100%] bg-white  border">
        <div
          className=" h-[100%] w-[100%]  border  
        "
        >
          <div className="bg-gray-300 h-12 w-[100%]">
            <h1 className="text-white text-center">Information</h1>
          </div>
          <ul className="flex flex-row justify-around text-gray-400 mt-4 border-b">
            {steps.map((item: string, index: number) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className=" cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          {state}
        </div>
      </div>
      <footer className="h-[30vh] bottom-0 w-full  bg-black">Footer</footer>
    </div>
  );
};

export default Home;
