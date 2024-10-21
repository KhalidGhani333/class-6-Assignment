
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  return (
    <div>
      
      <div className="relative bg-[url('/worldpicture.jpg')] bg-cover h-screen">
        
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        
        <div className='relative z-10 flex flex-col justify-center items-center text-white pt-20'>
          <h1 className='text-4xl text-center font-bold'>Explore the World with Travel Envy🌍✈️</h1>
          <p className='mt-20 w-[70vw]'>Are you ready to embark on a journey filled with adventure, culture, and breathtaking landscapes? At Your Travel Envy🌍✈️, we specialize in turning your travel dreams into reality!
          Whether you are seeking the thrill of exploring vibrant cities, relaxing on sun-kissed beaches, or immersing yourself in rich cultural experiences, our dedicated team is here to guide you every step of the way.
          Join us at Travel Envy and let your adventure begin! <b>Explore. Dream. Discover.</b></p>
        <h2 className='font-bold text-xl text-center'>Let’s turn your travel dreams into reality!</h2>
        <h2 className='font-bold text-xl text-center'>Contact us today, and lets make your next travel experience unforgettable!</h2>

         
          <div className=" flex flex-col sm:flex-col md:flex-row mt-10 mx-auto justify-around gap-y-3 sm:gap-x-10">
            <div className="flex items-center cursor-pointer gap-x-2">
              <FaFacebook className="size-14 text-blue-600" />
              <div className="text-start text-white">
                <p>Facebook:</p>
                <p className="font-bold text-white hover:text-blue-800">www.facebook.travelEnvy.com</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer gap-x-2">
              <IoLogoWhatsapp className="size-14 text-green-500 " />
              <div className="text-start text-white">
                <p>WhatsApp:</p>
                <p className="font-bold text-white hover:text-blue-800">0312-3456789</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer gap-x-2">
              <AiFillInstagram className="size-14 text-rose-800 " />
              <div className="text-start text-white">
                <p>Instagram:</p>
                <p className="font-bold text-white hover:text-blue-800">www.instagram.travelEnvy.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
