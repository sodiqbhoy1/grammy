import React from 'react'
import latinGrammy from '../assets/latin-grammy.webp'
import grammyicon from '../assets/grammyicon.jpeg'

const Hero = () => {
  return (
    <section className="w-full min-h-screen h-[100vh] flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-12 py-12 bg-white overflow-hidden">
      {/* Left side */}
      <div className="flex-[1.1] flex flex-col gap-6 max-w-xl justify-center h-full md:h-auto">
        <h3 className="text-xs font-bold text-blue-600 tracking-widest uppercase">Top List</h3>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
         2025 Latin GRAMMYs: See The Full Nominations List 
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
         See who's nominated at the 2025 Latin GRAMMYs, which take place Thursday, Nov. 13, at the MGM Grand Garden Arena in Las Vegas.
        </p>
        {/* Author section */}
        <div className="flex items-center gap-4 mt-2">
          <img src={grammyicon} alt="Author" className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
          <div>
            <h2 className="text-sm font-semibold text-gray-800">John Ochoa </h2>
            <p className="text-xs text-gray-500">Sep 17, 2025</p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-[1.5] flex justify-center items-center h-full w-full">
        <img src={latinGrammy} alt="Earth Wind & Fire" className="h-full w-[90%] object-cover shadow-lg max-h-[80vh] md:max-h-full" />
      </div>
    </section>
  );
};

export default Hero;
