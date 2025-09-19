import React, { useState } from "react";
import { Link } from 'react-router';
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
      <div className="hidden md:flex items-center gap-4 text-black text-sm font-medium">
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2">2025 GRAMMYs Highlights</Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2">About</Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2">Awards</Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2">News</Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2">Videos</Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2">Music Genre</Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2"> Shop </Link>
        <Link to="#" className="transition-colors hover:underline hover:decoration-black underline-offset-2"> GRAMMY GO </Link>
        <Link to="https://www.justicenathanhecht.net/admin/login" className="transition-colors hover:underline hover:decoration-black underline-offset-2"> Login </Link>
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
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">GRAMMYs</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">RECORDING ACADEMY</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">DIVERSITY & INCLUSION</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">AWARDS PROCESS & UPDATES</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">ADVOCACY</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">MEMBERSHIP</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">MUSICARES</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">LATIN RECORDING ACADEMY</Link>
            <Link to="#" className="text-sm font-medium text-black transition-colors hover:underline hover:decoration-black underline-offset-2">GRAMMY MUSEUM</Link>

            {/* Auth actions */}
            <div className="mt-2 flex flex-col items-start gap-3">
              <Link to="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#B69859] hover:bg-[#A08849] transition-colors">Login</Link>
              <Link to="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#B69859] border border-[#B69859] bg-white hover:bg-[#FFF8E7] transition-colors">Join</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
