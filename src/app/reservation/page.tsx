

import React from 'react'

const Reservation = () => {
  return (
    <div>
      
      <div className="relative bg-[url('/reservation1.jfif')] bg-cover bg-center h-screen">
      
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className='relative z-10 flex flex-col justify-center items-center text-white pt-20'>
          <h1 className='text-4xl text-center font-bold'>Are You Looking To Travel?</h1>
          <h2 className='text-3xl text-white mt-10 text-center'>Make a Reservation By Clicking The Button </h2>
          <button className='text-2xl font-semibold rounded-full border-2 py-1 px-2 mt-20 hover:bg-white hover:text-blue-400'>Book Yours Now</button>
          <div className='mt-14 '> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48226.56569930386!2d55.17822908171905!3d25.157667578281554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69a8668cc207%3A0x6ff3402c3c820b74!2sSahil%20al%20Bahar%20Tourism%20LLC!5e1!3m2!1sen!2s!4v1729450495466!5m2!1sen!2s" title='goole map' width="300" height="200" loading="lazy" className='rounded-xl w-[50vw] h-60'
        ></iframe>
      </div>
        </div>
    </div>
    </div>
    
  )
}

export default Reservation
