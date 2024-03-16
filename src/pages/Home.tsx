import React from 'react'

const Home = () => {
  return (
    <div className="bg-pink-200 h-[200vh] w-screen flex flex-col ">
      <div className="bg-orange-300 h-[6%]"> Taskbar</div>
      <div className="flex flex-row h-[100vh] w-[100%] bg-white  ">
        <div className="bg-green-300 h-[100%] w-[50%]">Right Body</div>
        <div className="bg-blue-300 h-[100%] w-[50%]">Left body</div>
      </div>
    <footer className="h-[30vh] bottom-0 sticky  bg-black">Footer</footer>
      
    </div>
  );
}

export default Home
