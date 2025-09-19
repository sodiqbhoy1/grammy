import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';

const AdminHome = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 md:pt-20">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#1a2e4a] to-[#2d4a6a] text-white py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center text-[#B69859] mb-4">
              <svg className="w-10 h-10 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-sm font-semibold tracking-widest uppercase">Secure Admin Portal</h2>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl xl:text-6xl tracking-tight">
              Administrative Control Center
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Manage users, monitor conversations, and maintain system integrity from a centralized dashboard.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">2,483</h3>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-100 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">127</h3>
                  <p className="text-sm text-gray-500">Active Chat Rooms</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">99.8%</h3>
                  <p className="text-sm text-gray-500">System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Administrative Features</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Comprehensive tools to manage your chat application effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">User Management</h3>
                <p className="text-gray-600">View, manage, and monitor all user accounts with detailed analytics and moderation tools.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Conversation Monitoring</h3>
                <p className="text-gray-600">Monitor chat rooms in real-time, with tools to moderate content and ensure community guidelines.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Access detailed metrics and reports on user activity, engagement, and system performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#1a2e4a] to-[#2d4a6a] rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 text-center md:py-16 md:px-12 lg:py-20 lg:px-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to manage your application?</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                  Access the admin dashboard to monitor and control all aspects of your chat application.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/admin/login"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-[#B69859] hover:bg-[#A08849] transition-colors rounded-lg shadow-md"
                  >
                    Access Admin Panel
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-base font-medium text-[#B69859] border border-[#B69859] bg-white hover:bg-[#FFF8E7] transition-colors rounded-lg"
                  >
                    ← Back to Main Site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;