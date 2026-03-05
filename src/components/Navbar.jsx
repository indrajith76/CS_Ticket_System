import { useState } from "react";
import { RiCloseLargeLine, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <nav className="shadow bg-white">
      <div className="flex items-center justify-between container mx-auto py-4 px-4 lg:px-0">
        <a href="#" className="text-xl font-bold text-gray-800">
          CS — Ticket System
        </a>
        <button className="border border-gray-400 p-2 rounded block lg:hidden" onClick={() => setMenuStatus(!menuStatus)}>
          {menuStatus ? <RiCloseLargeLine /> : <RiMenu2Line />}
        </button>
        <ul
          className={`flex flex-col lg:flex-row items-center gap-3 lg:gap-8 bg-white lg:bg-white p-4 lg:p-0 absolute lg:relative shadow-xl lg:shadow-none rounded-md lg:rounded-none duration-700 ${!menuStatus ? "-top-full -right-14" : "top-14 right-4"} lg:top-0 lg:right-0`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 text-white rounded-md bg-linear-to-r from-purple-500 to-purple-700"
            >
              + New Ticket
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
