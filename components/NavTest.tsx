'use client'

import { useState } from "react";

const NavTest = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          humanity
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                About Us
              </a>
            </li>
            <li className="relative">
              <button
                onClick={handleDropdownToggle}
                className="hover:text-gray-600"
              >
                Pages
                <svg
                  className="inline-block w-4 h-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 w-48 bg-white shadow rounded-md"
                  role="menu"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Page 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Page 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Event
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Contact
              </a>
            </li>
            <li>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavTest;