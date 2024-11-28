import React, { useState } from "react";
import logo from "../assets/logo.png"; // Path to your logo
import da from "../assets/da.png"; // Path to your down arrow icon
import icon from "../assets/icon.png"; // Path to your last icon (user icon)

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with margin-left */}
        <div className="flex items-center ml-20"> {/* Added ml-4 to create gap before the logo */}
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {/* Home */}
          <a
            href="#home"
            className="text-gray-700 hover:text-gray-900 font-medium ml-10"
          >
            Home
          </a>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
            >
              Products
              <img
                src={da} // Use down arrow image here
                alt="Down Arrow"
                className={`ml-2 h-4 w-4 transform transition-all duration-300 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProductsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <a
                  href="#product1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product 1
                </a>
                <a
                  href="#product2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product 2
                </a>
                <a
                  href="#product3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Product 3
                </a>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
            >
              Resources
              <img
                src={da} // Use down arrow image here
                alt="Down Arrow"
                className={`ml-2 h-4 w-4 transform transition-all duration-300 ${
                  isResourcesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isResourcesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <a
                  href="#resource1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Resource 1
                </a>
                <a
                  href="#resource2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Resource 2
                </a>
                <a
                  href="#resource3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Resource 3
                </a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <a
            href="#pricing"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Pricing
          </a>
        </div>

        {/* Last Icon (User Icon) positioned to the right */}
        <div className="flex items-center space-x-4 ml-auto">
          <button className="text-gray-700 hover:text-gray-900">
            <img
              src={icon} // Using the image from assets for the user icon
              alt="User Icon"
              className="h-8 w-8 rounded-full mr-16"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
