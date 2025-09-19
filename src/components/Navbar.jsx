import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { FiMenu, FiSearch, FiBell, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-3 md:px-4 py-2 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
      {/* Left: Hamburger and Logo */}
      <div className="flex items-center gap-1">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <FiMenu className="w-6 h-6" />
        </button>
  <img src={logo} alt="Grammy Logo" className="h-9 md:h-11 w-auto" />
      </div>

      {/* Center: Links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-4 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600 transition">2025 GRAMMYs Highlights</a>
        <a href="#" className="hover:text-blue-600 transition">About</a>
        <a href="#" className="hover:text-blue-600 transition">Awards</a>
        <a href="#" className="hover:text-blue-600 transition">News</a>
        <a href="#" className="hover:text-blue-600 transition">Videos</a>
        <a href="#" className="hover:text-blue-600 transition">Music Genre</a>
        <a href="#" className="hover:text-blue-600 transition"> Shop </a>
        <a href="#" className="hover:text-blue-600 transition"> GRAMMY GO </a>
        <a href="#" className="hover:text-blue-600 transition"> Login </a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-1">
        <button className="p-2 rounded hover:bg-gray-100 focus:outline-none" aria-label="Search">
          <FiSearch className="w-5 h-5" />
        </button>
        <input
          type="text"
          placeholder="Search"
          aria-label="Search input"
          className="hidden md:block bg-transparent px-0 py-1 border-0 border-b-1 border-[#666] focus:outline-none focus:ring-0 placeholder-gray-400 w-28 lg:w-40"
        />
        <button className="p-2 rounded hover:bg-gray-100 focus:outline-none" aria-label="Notifications">
          <FiBell className="w-5 h-5" />
        </button>
      </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden flex flex-col">
          {/* Top bar with logo and close icon */}
          <div className="flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200">
            <img src={logo} alt="Grammy Logo" className="h-9 w-auto" />
            <button
              className="p-2 rounded hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Dropdown links */}
          <div className="bg-white w-full flex flex-col gap-4 p-6 flex-1 shadow-lg">
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">GRAMMYs</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">RECORDING ACADEMY</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">DIVERSITY & INCLUSION</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">AWARDS PROCESS & UPDATES</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">ADVOCACY</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">MEMBERSHIP</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">MUSICARES</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">LATIN RECORDING ACADEMY</a>
            <a href="#" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">GRAMMY MUSEUM</a>
          </div>
        </div>
      )}
    </nav>
  );
}
