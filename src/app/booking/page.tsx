
import React from 'react'

const Booking = () => {
  return (
    
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80vw] md:w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Book Your Adventure</h1>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            placeholder="Your Name"/>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            placeholder="Your Email"/>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date of Booking
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"/>
        </div>

        <div className="mb-4">
          <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"/>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Book Now
          </button>
        </div>
      </form>
    </div>
    
    
  )
}

export default Booking
