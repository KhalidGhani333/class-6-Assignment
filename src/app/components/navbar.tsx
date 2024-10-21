
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between mx-auto items-center font-bold h-16 bg-sky-300'>
        <div className='md:justify-start text-3xl ml-5 text-white text-center'>Travel Envy</div>
      <div className='flex gap-4 md:gap-8  md:mr-36 text-white mx-auto mr-auto'>
      <Link href="./" className='hover:text-blue-400 hover:border-b-4 hover:border-blue-400'>Home</Link>
      <Link href="./about" className='hover:text-blue-400 hover:border-b-4 hover:border-blue-400'>About</Link>
      <Link href="./deals" className='hover:text-blue-400 hover:border-b-4 hover:border-blue-400'>Deals</Link>
      <Link href="./reservation" className='hover:text-blue-400 hover:border-b-4 hover:border-blue-400'>Reservation</Link>
      <Link href="./booking" className='hover:text-blue-400 hover:border-b-4 hover:border-blue-400'>BookYours</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
