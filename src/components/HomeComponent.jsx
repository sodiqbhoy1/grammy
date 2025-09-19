import React, { useState } from 'react'
import { Link } from 'react-router'
import Footer from './Footer'

// Asset imports - organized by type
import grammyicon from '../assets/grammyicon.jpeg'
import gramophone from '../assets/gramophone.png'

// Featured articles
import CHAEYOUNG from '../assets/CHAEYOUNG.webp'
import bobMarley from '../assets/bob-marley.webp'
import MarkRonson from '../assets/MarkRonson.webp'

// Hispanic heritage articles
import eddie from '../assets/eddie.webp'
import belinda from '../assets/belinda.webp'
import johann from '../assets/johann.webp'


const HomeComponent = () => {
  // State management
  // const [currentSlide, setCurrentSlide] = useState(0)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    favoriteGenre: '',
  })
  const [formTouched, setFormTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
  })

  const genreOptions = [
    'Pop', 'Rock', 'Hip-Hop', 'R&B/Soul', 'Country', 'Electronic/Dance',
    'Latin', 'Jazz', 'Classical', 'Reggae/Afrobeat', 'Indie/Alternative', 'Gospel', 'Other'
  ]

  // Helper functions
  const isEmpty = (str) => !str.trim()

  const getFormErrors = () => ({
    firstName: formTouched.firstName && isEmpty(formValues.firstName) ? 'Complete this field.' : '',
    lastName: formTouched.lastName && isEmpty(formValues.lastName) ? 'Complete this field.' : '',
    email: formTouched.email && isEmpty(formValues.email) ? 'Complete this field.' : '',
  })

  // Event handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormValues(prev => ({ ...prev, [name]: value }))
  }

  const handleFormBlur = (e) => {
    const { name } = e.target
    if (name in formTouched) {
      setFormTouched(prev => ({ ...prev, [name]: true }))
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormTouched({ firstName: true, lastName: true, email: true })
    
    if (isEmpty(formValues.firstName) || isEmpty(formValues.lastName) || isEmpty(formValues.email)) {
      return
    }
    
    // TODO: Handle form submission
    console.log('Newsletter subscription:', formValues)
  }

  const errors = getFormErrors()

  return (
    <>
      {/* Featured Articles Section */}
      <section className="w-full flex flex-col px-4 md:px-0 py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full md:h-[480px]">
          {/* Main Article Card */}
          <div className="flex md:flex-[2] bg-white overflow-hidden flex-col h-full">
            <Link to="" className="flex flex-col w-full h-full">
              <img 
                src={CHAEYOUNG} 
                alt="CHAEYOUNG" 
                className="w-full h-56 md:h-64 object-cover object-center" 
              />
              <div className="p-4 flex flex-col gap-3 flex-1">
                <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                  INTERVIEW
                </h2>
                <h4 className="text-[28px] text-gray-900 leading-snug">
                  CHAEYOUNG On How 'LIL FANTASY vol. 1' Was Inspired By Female Solidarity, Artistic Experimentation & Her Healing Journey
                </h4>
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={grammyicon} 
                    alt="Author" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-100" 
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Kelly Nguyen</h2>
                    <p className="text-xs text-gray-500">Sep 16, 2025</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Article Cards */}
          <div className="flex md:flex-1 bg-white overflow-hidden flex-col h-full">
            <Link to="" className="flex flex-col w-full">
              <img src={bobMarley} alt="Bob Marley" className="w-full h-56 md:h-64 object-cover" />
              <div className="p-4 flex flex-col gap-3 flex-1">
                <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                  TOP LIST
                </h2>
                <h4 className="text-[20px] font-semibold text-gray-900 leading-snug">
                  A Guide To The Marley Universe: From Bob & Rita, To Ziggy, Stephen, Damian & More
                </h4>
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={grammyicon} 
                    alt="Author" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-100" 
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Patricia Meschino</h2>
                    <p className="text-xs text-gray-500">Sep 15, 2025</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex md:flex-1 bg-white overflow-hidden flex-col h-full">
            <Link to="" className="flex flex-col w-full">
              <img src={MarkRonson} alt="Mark Ronson" className="w-full h-56 md:h-64 object-cover" />
              <div className="p-4 flex flex-col gap-3 flex-1">
                <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                  TOP LIST
                </h2>
                <h4 className="text-[20px] font-semibold text-gray-900 leading-snug">
                  Behind Mark Ronson's Hits: How 'Boogie Nights,' Five-Hour Jams & Advice From Paul McCartney Inspired His Biggest Singles & Collabs
                </h4>
                <div className="flex items-center gap-3 mt-auto">
                  <img 
                    src={grammyicon} 
                    alt="Author" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-100" 
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Jessica Lipsky</h2>
                    <p className="text-xs text-gray-500">Sep 15, 2025</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hispanic Heritage Marquee Section */}
      <section className="w-full py-8">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((duplicateIndex) => (
              <React.Fragment key={duplicateIndex}>
                <Link to="" className="flex-shrink-0 w-64 md:w-80">
                  <div className="w-full">
                    <img 
                      src={eddie} 
                      alt="Eddie Palmieri" 
                      className="w-full h-40 md:h-48 object-cover" 
                    />
                    <p className="mt-2 text-[16px] font-[400] text-gray-800 clamp-2">
                      6 Ways Eddie Palmieri Changed Latin Music: From A Historic GRAMMY To His Defiant...
                    </p>
                  </div>
                </Link>
                <Link to="" className="flex-shrink-0 w-64 md:w-80">
                  <div className="w-full">
                    <img 
                      src={belinda} 
                      alt="Belinda" 
                      className="w-full h-40 md:h-48 object-cover" 
                    />
                    <p className="mt-2 text-[16px] font-[400] text-gray-800 clamp-2">
                      Belinda Shares The Inspirations Behind 'Indómita': From Friendship To Powerful Women In History...
                    </p>
                  </div>
                </Link>
                <Link to="" className="flex-shrink-0 w-64 md:w-80">
                  <div className="w-full">
                    <img 
                      src={johann} 
                      alt="Johann Vera" 
                      className="w-full h-40 md:h-48 object-cover" 
                    />
                    <p className="mt-2 text-[16px] font-[400] text-gray-800 clamp-2">
                      Johann Vera Is No Longer Silent: How A Deeply Personal EP Empowered His LGBTQ+ Journey...
                    </p>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      
      {/* Newsletter Subscription Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Newsletter Image */}
            <div className="flex justify-center md:justify-center">
              <img 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover" 
                src={gramophone} 
                alt="Gramophone" 
              />
            </div>

            {/* Newsletter Form */}
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Subscribe to the GRAMMYs Newsletter
              </h2>
              <p className="mt-2 text-gray-600">
                Be the first to find out about GRAMMY Nominees, winners, important news, and events.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
                {/* First Name Field */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formValues.firstName}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    className="mt-1 block w-full bg-transparent px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-xs text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name Field */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formValues.lastName}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    className="mt-1 block w-full bg-transparent px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-xs text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Enter your Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="mt-1 block w-full bg-transparent px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Favorite Genre Field */}
                <div>
                  <label htmlFor="favoriteGenre" className="block text-sm font-semibold text-gray-900">
                    Favorite Genre
                  </label>
                  <select
                    id="favoriteGenre"
                    name="favoriteGenre"
                    value={formValues.favoriteGenre}
                    onChange={handleFormChange}
                    className="mt-1 block w-full bg-transparent px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-800 focus:outline-none focus:ring-0"
                  >
                    <option value="">-- Select a genre --</option>
                    {genreOptions.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre === 'R&B/Soul' ? 'R&B / Soul' : genre}
                      </option>
                    ))}
                  </select>

                  <p className="mt-4 text-xs text-gray-600">
                    By clicking Subscribe, you agree to the Recording Academy's{' '}
                    <Link to="#" className="underline hover:text-yellow-600">Terms</Link> and{' '}
                    <Link to="#" className="underline hover:text-yellow-600">Privacy Policy</Link>.
                  </p>
                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center rounded-md bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-900 active:bg-gray-800"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default HomeComponent