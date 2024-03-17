import React from 'react'
import { Link } from 'react-router-dom';
const logo =
  "https://i.pinimg.com/564x/6f/e3/5b/6fe35b072a948605673b07eea86f4a58.jpg"
  const avatar =
    "https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.avif ";
const menu =['home','gallery','history','about us','contact','Login']

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between items-center h-[10vh] w-[100%] pl-5 pr-4 shadow-sm ">
      <div className="h-10 w-10">
        <img src={logo} alt="userImage" />
      </div>
      <ul className="bg-white text-green-500 flex flex-row gap-10 ">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={`${
              index === 0
                ? "home"
                : index === 1
                ? "gallery"
                : index === 2
                ? "history"
                : index === 3
                ? "about"
                : index === 4
                ? "contact"
                : index === 5
                ? "login"
                : null
            }`}
          >
            <li>
              {item.slice(0, 1).toLocaleUpperCase().concat(item.slice(1))}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar
