import React from 'react'
import RA from '../assets/RA.png'

const Footer = () => {
  return (
    <footer className="w-full mt-16">
      {/* Middle: Link columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 text-[16px]">
          {/* Column */}
            <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider ">RECORDING ACADEMY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition"> About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Governance</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Press Room</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">News</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Awards Process</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">DEI</a></li>
            </ul>
            </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider ">MEMBERSHIP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">Chapters</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Producers & Engineers Wing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Songwriters & Composers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Wing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">GRAMMY U</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Join</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Log In</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider ">GRAMMYS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">Awards</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">News</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Videos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Genres</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Shop</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">GRAMMY</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">GO</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider ">ADVOCACY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">News</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Learn</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Act</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider">MUSICARES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Get Help</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Give</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">News</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Programs & Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider ">LATIN GRAMMYS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">Awards</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">News</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Videos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Cultural Foundation</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Members</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider ">GRAMMY MUSEUM</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition">COLLECTION:live</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Museum Tickets</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Exhibits</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Education</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Programs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Donate</a></li>
            </ul>
          </div>
        </div>
      </div>
  {/* Bottom: two-column responsive section */}
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <hr className="w-full h-px my-6 border-0 bg-gray-300 drop-shadow-sm rounded" />
  </div>
     
     <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center gap-6'>

{/* left part */}

<div className="flex items-center shrink-0">
            <img src={RA} alt="Recording Academy Logo" className="block h-14 md:h-16 w-auto shrink-0" />
          </div>

{/* right part */}

<div className="flex-1 min-w-0 flex flex-col gap-3 justify-center items-center text-center">
            <p className="text-xs text-center">© {new Date().getFullYear()} - Recording Academy. All rights reserved.</p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <li><a href="#" className="hover:text-yellow-400 hover:underline focus-visible:underline transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-yellow-400 hover:underline focus-visible:underline transition">Privacy</a></li>
                <li><a href="#" className="hover:text-yellow-400 hover:underline focus-visible:underline transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 hover:underline focus-visible:underline transition">Copyright Notice</a></li>
                <li><a href="#" className="hover:text-yellow-400 hover:underline focus-visible:underline transition">Contact Us</a></li>
              </ul>
            </nav>
            <p className='mt-2 text-[11px] text-center'>
              Some of the content on this site expresses viewpoints and opinions that are not those of the Recording Academy and its Affiliates. Responsibility for the accuracy of information provided in stories not written by or specifically prepared for the Academy and its Affiliates lies with the story's original source or writer. Content on this site does not reflect an endorsement or recommendation of any artist or music by the Recording Academy and its Affiliates.
            </p>
          </div>


     </div>
          
    </footer>
  )
}

export default Footer
