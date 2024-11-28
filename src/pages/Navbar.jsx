import React, { useState } from "react";
import logo from "../assets/logo.png"; // Path to your logo
import da from "../assets/da.png"; // Path to your down arrow icon
import icon from "../assets/icon.png"; // Path to your last icon (user icon)

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

  // Function to toggle Products dropdown and close Resources dropdown
  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    if (isResourcesDropdownOpen) {
      setIsResourcesDropdownOpen(false);
    }
  };

  // Function to toggle Resources dropdown and close Products dropdown
  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    if (isProductsDropdownOpen) {
      setIsProductsDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with margin-left */}
        <div className="flex items-center ml-20">
          <img src={logo} alt="Logo" className="h-10 w-auto transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 transition-all duration-300 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {/* Home */}
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-500 font-semibold transition-all duration-300 transform hover:scale-105 ml-10"
          >
            Home
          </a>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProductsDropdown} // Toggle the Products dropdown
              className="text-gray-700 hover:text-blue-500 font-semibold flex items-center transition-all duration-300"
            >
              Products
              <img
                src={da}
                alt="Down Arrow"
                className={`ml-2 h-4 w-4 transform transition-all duration-300 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border transition-all duration-300 opacity-100">
                <a
                  href="#product1"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Product 1
                </a>
                <a
                  href="#product2"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Product 2
                </a>
                <a
                  href="#product3"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Product 3
                </a>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={toggleResourcesDropdown} // Toggle the Resources dropdown
              className="text-gray-700 hover:text-blue-500 font-semibold flex items-center transition-all duration-300"
            >
              Resources
              <img
                src={da}
                alt="Down Arrow"
                className={`ml-2 h-4 w-4 transform transition-all duration-300 ${
                  isResourcesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isResourcesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border transition-all duration-300 opacity-100">
                <a
                  href="#resource1"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Resource 1
                </a>
                <a
                  href="#resource2"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Resource 2
                </a>
                <a
                  href="#resource3"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Resource 3
                </a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-500 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Pricing
          </a>
        </div>

        {/* User Icon (Visible on Desktop and Hidden on Mobile) */}
        <div className="flex items-center space-x-4 ml-auto hidden md:block">
          <button className="text-gray-700 hover:text-blue-500 transition-all duration-300">
            <img
              src={icon}
              alt="User Icon"
              className="h-8 w-8 rounded-full transition-all duration-300 transform hover:scale-110 mr-16"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility based on isMenuOpen */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2 ">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleProductsDropdown} // Toggle the Products dropdown
              className="block px-4 py-2  flex items-center transition-all duration-300"
            >
              Products
              <img
                src={da}
                alt="Down Arrow"
                className={`ml-2 h-4 w-4 transform transition-all duration-300 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsDropdownOpen && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg border transition-all duration-300 opacity-100">
                <a
                  href="#product1"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Product 1
                </a>
                <a
                  href="#product2"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Product 2
                </a>
                <a
                  href="#product3"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Product 3
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleResourcesDropdown} // Toggle the Resources dropdown
              className="block px-4 py-2 flex items-center transition-all duration-300 "
            >
              Resources
              <img
                src={da}
                alt="Down Arrow"
                className={`ml-2 h-4 w-4 transform transition-all duration-300 ${
                  isResourcesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isResourcesDropdownOpen && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg border transition-all duration-300 opacity-100 justify-center">
                <a
                  href="#resource1"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Resource 1
                </a>
                <a
                  href="#resource2"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Resource 2
                </a>
                <a
                  href="#resource3"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300"
                >
                  Resource 3
                </a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <a
            href="#pricing"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition-all duration-300 justify-center items-center"
          >
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
