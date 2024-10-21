

import { IoIosContact } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";


export default function Home() {
  return (
    <div>
      
      <div className="relative bg-[url('/geneva-switzerland.jpg')] bg-cover h-screen">
        
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className='relative z-10 flex flex-col justify-center items-center text-white pt-20'>
        <p className="text-xl text-white text-center ">Take a Glimpse into the Beautiful country of:</p>
        <h1 className="text-white text-5xl font-bold mt-4">Switzerland</h1>
        <button className="border-2 mt-8 border-blue-400 rounded-3xl text-blue-400 px-8 py-2 hover:bg-sky-300 hover:text-white ">Go There</button>

        <div className="flex flex-col sm:flex-col md:flex-row mb-10 h-80 w-[300px] md:h-32 md:w-[1000px] rounded-lg md:rounded-full bg-white mt-20 justify-around items-center">
            <div className="flex items-center">
            <IoIosContact className="size-12 text-sky-300" />
            <div className="text-start text-gray-500"><p>Population:</p>
            <p className="font-bold text-sky-300">8.66 M</p>
            </div>
            </div>
            <div className="flex items-center">
            <BiWorld className="size-12 text-sky-300" />
            <div className="text-start text-gray-500"><p>Territory:</p>
            <p className="font-bold text-sky-300">41.290 KM2</p>
            </div>
            </div>
            <div className="flex items-center">
            <AiFillHome className="size-12 text-sky-300" />
            <div className="text-start text-gray-500"><p>AVG Price:</p>
            <p className="font-bold text-sky-300">$100.200</p>
            </div>
            </div>
            <div className="flex items-center">
            
            <div className=" text-white bg-sky-300 hover:bg-blue-400 py-2 px-6 rounded-full">
                <button>Explore More</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
