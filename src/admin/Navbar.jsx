import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/admin/home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#B69859] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Admin Portal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/admin/home"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/admin/home')
                      ? 'text-[#B69859] border-b-2 border-[#B69859]'
                      : 'text-gray-700 hover:text-[#B69859] hover:border-b-2 hover:border-[#B69859]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/admin/login"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/admin/login')
                      ? 'text-[#B69859] border-b-2 border-[#B69859]'
                      : 'text-gray-700 hover:text-[#B69859] hover:border-b-2 hover:border-[#B69859]'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/admin/signup"
                  className="text-white bg-[#B69859] px-4 py-2 text-sm font-medium hover:bg-[#A08849] transition-colors"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/admin-dashboard"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/admin-dashboard')
                      ? 'text-[#B69859] border-b-2 border-[#B69859]'
                      : 'text-gray-700 hover:text-[#B69859] hover:border-b-2 hover:border-[#B69859]'
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-black transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#B69859] focus:outline-none focus:ring-2 focus:ring-[#B69859] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/admin/home"
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive('/admin/home')
                        ? 'text-[#B69859]'
                        : 'text-gray-700 hover:text-[#B69859]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/admin/login"
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive('/admin/login')
                        ? 'text-[#B69859]'
                        : 'text-gray-700 hover:text-[#B69859]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/admin/signup"
                    className="block bg-[#B69859] text-white px-3 py-2 text-base font-medium hover:bg-[#A08849] transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/admin-dashboard"
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname.startsWith('/admin-dashboard')
                        ? 'text-[#B69859]'
                        : 'text-gray-700 hover:text-[#B69859]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left bg-gray-800 text-white px-3 py-2 text-base font-medium hover:bg-black transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
