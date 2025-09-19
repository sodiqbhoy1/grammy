import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: '', 
    lastName: '',
    email: '',
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Not authenticated. Please login.');
          setLoading(false);
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/admin/details`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Set user data from API response
        const adminData = response.data;
        
        setUser({
          firstName: adminData.firstName || '',
          lastName: adminData.lastName || '',
          email: adminData.email || ''
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching admin details:', err);
        setError(err.response?.data?.message || 'Failed to fetch profile data');
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white border border-gray-200 p-8 flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#B69859] mb-4"></div>
          <p className="text-gray-600">Loading profile information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-lg text-red-600">{error}</div>
        <div className="mt-4">
          <button 
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 bg-[#B69859] text-white hover:bg-[#A08849] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-gray-500">Account</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Admin Profile</h1>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-100">Cancel</button>
            <button className="px-3 py-2 text-sm bg-[#B69859] text-white hover:bg-[#A08849]">Save</button>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-white border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#B69859] text-white flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-gray-900 truncate">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-gray-600 truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">First Name</label>
                <p className="text-base text-gray-900">{user.firstName}</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Last Name</label>
                <p className="text-base text-gray-900">{user.lastName}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Email Address</label>
                <p className="text-base text-gray-900">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="mt-6 sm:hidden flex items-center gap-2">
          <button className="flex-1 px-3 py-2 text-sm border border-gray-300 hover:bg-gray-100">Cancel</button>
          <button className="flex-1 px-3 py-2 text-sm bg-[#B69859] text-white hover:bg-[#A08849]">Save</button>
        </div>
      </div>
    </div>
  );

}

export default Profile;
