import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import {Link} from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b-2 mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                className="w-10 inline-block items-center"
                alt="abc"
              />
              <span>CODEXDESK</span>
            </a>
            {/* showing navitem using map  */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link spy={true} smooth={true} offset={-100} activeClass="active" key={link} to={path} className="block hover:text-gray-300 cursor-pointer  ">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* language and signup  */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className=" hidden lg:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>
          {/* menu btn. only display on mobile  */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-lg  focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* navItems for mobile devices  */}
      <div className={`space-y-4 px-4 pt-24 md:hidden lg:hidden pb-5 text-xl bg-secondary ${isMenuOpen?'block fixed top-0 right-0 left-0':'hidden'}`}>
      {navItems.map(({ link, path }) => (
                <Link spy={true} smooth={true} onClick={toggleMenu} offset={-80} activeClass="active" key={link} to={path} className="block hover:text-gray-300 cursor-pointer text-white">
                  {link}
                </Link>
              ))}
      </div>
    </>
  );
}

export default Navbar;
