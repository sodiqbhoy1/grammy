// src/components/LandingPage.jsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
// Use site images from HomeComponent assets
import CHAEYOUNG from '../assets/CHAEYOUNG.webp'
import bobMarley from '../assets/bob-marley.webp'
import grammycard from '../assets/grammycard.webp'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const LandingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const { roomId } = useParams(); // Correctly get roomId from URL path

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple clicks while loading
    if (!name || !email || !roomId) return alert("Missing fields or room ID.");

    setIsLoading(true); // Set loading to true

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/user/register`, {name, email});
      if(response.status === 201){
        // Save user info to sessionStorage to persist across refreshes
        sessionStorage.setItem('chatUser', JSON.stringify({ name, email }));
        navigate(`/chat/${roomId}`);
      }
    } catch (error) {
      console.log("error", error);
      alert("Registration failed. Please try again."); // Inform user of failure
    } finally {
      setIsLoading(false); // Set loading to false after request is complete
    }
  };


  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* Main Content wrapper to clear fixed navbar */}
      <div className="pt-16 md:pt-20">
        {/* Hero Section using site imagery */}
        <section
          className="relative bg-cover bg-center min-h-[70vh] flex items-center justify-end text-white px-4"
          style={{ backgroundImage: `url(${CHAEYOUNG})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-4xl text-right">
            <div className="space-y-6">
              {/* Text Content */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight uppercase">
                Join The Conversation
                <br />
                <span className="text-xl sm:text-2xl md:text-4xl">Be part of the community</span>
              </h2>

              {/* Form (unchanged functionality) */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row items-center justify-end gap-4"
              >
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-transparent border border-white placeholder-white text-white px-3 py-2 rounded-md w-full lg:w-auto focus:outline-none focus:border-[#B69859]"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent border border-white placeholder-white text-white px-3 py-2 rounded-md w-full lg:w-auto focus:outline-none focus:border-[#B69859]"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-md w-full lg:w-auto font-medium flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </>
                  ) : (
                    'Join Chat'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Editorial-style Section */}
        <section className="w-full py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-900"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                  Share, discover, and connect with fans around trending topics.
                </h2>
                <p className="mt-4 text-gray-700 text-lg">
                  Your hub for real-time discussions — powered by a community that loves music as much as you do.
                </p>
              </div>
              {/* Image */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={bobMarley}
                  alt="Feature visual"
                  className="w-full max-w-md h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Parallax-style CTA using site image */}
        <section
          className="relative bg-cover bg-center bg-fixed min-h-[60vh] flex items-center"
          style={{ backgroundImage: `url(${grammycard})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Join the community
              </h3>
              <p className="mt-3 text-gray-200 text-lg md:text-xl">
                Engage in safe, vibrant conversations. It starts with your name and email above.
              </p>
              <a
                href="#join"
                className="inline-block mt-6 text-base md:text-lg bg-black py-3 px-8 text-white font-semibold hover:bg-gray-900 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* footer section */}
        <Footer/>
      </div>

    </>
  );
};

export default LandingPage;
