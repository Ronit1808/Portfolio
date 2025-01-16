import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <header className="text-white p-5 w-full z-50">
        <div className="container mx-auto px-4 sm:px-14 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold font-lobster tracking-wider text-white">
            RG <span className='bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent'>.</span>
          </h1>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex text-lg space-x-6 font-jost">
            <a href="#about" className=" hover:text-blue-400 transition-colors duration-200">
              About
            </a>
            <a href="#skills" className=" hover:text-blue-400 transition-colors duration-200">
              Skills
            </a>
            <a href="#projects" className=" hover:text-blue-400 transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className=" hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 z-40 sm:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 space-y-8 text-lg sm:text-xl text-white">
          <a
            href="#about"
            onClick={toggleMenu}
            className= "hover:text-blue-400  transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className= "hover:text-blue-400  transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className= "hover:text-blue-400  transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className= "hover:text-blue-400  transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;