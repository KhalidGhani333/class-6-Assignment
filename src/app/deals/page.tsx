
import Image from 'next/image'
import React from 'react'

import { IoIosContact } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

export default async function Deal(){
  await new Promise((resolve)=>{
    setTimeout(resolve,3000)})
  return (
    <div>
      <div className='p-10'>
        <h1 className='text-xl font-bold'>Visit One of Our Countries Now</h1>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cumque!</p>
      </div>
        <div className='ml-2 md:ml-10 mt-10 pb-2 flex'>
          <div className='flex flex-col md:flex-row '>
            <div>
          <Image src="/image3.jfif" alt="switzerland" width={250} height={250} className="rounded-lg w-52 h-60 bg-cover"/>
          </div>
          <div className=' pl-0 md:pl-4 '>
            <h1 className='text-xl font-bold mt-5 md:mt-0'>FRANCE</h1>
            <span className='text-sm text-gray-400 '>Europe</span>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur. <br /> adipisicing Aliquid inventore dolorem ipsum quod.</p>
          
          <div className=" w-[400px]  mt-10 flex  ">
            <div className="flex items-center mr-4">
            <IoIosContact className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">67.41 M People</p>
            </div>
            <div className="flex items-center mr-4">
            <BiWorld className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">551.500 KM2</p>
            </div>
            <div className="flex items-center mr-4">
            <AiFillHome className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">$425.000</p>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className=" text-blue-400 border-b-2 border-blue-500 hover:bg-blue-400 hover:text-white py-1 px-4 rounded-full">
                <button>Explore More</button>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className='ml-2 md:ml-10 mt-10 flex'>
          <div className='flex flex-col md:flex-row '>
            <div>
          <Image src="/image1.jfif" alt="switzerland" width={250} height={250} className="rounded-lg w-52 h-60 bg-cover"/>
          </div>
          <div className='md:pl-4'>
            <h1 className='text-xl font-bold mt-5 md:mt-0'>SWITZERLAND</h1>
            <span className='text-sm text-gray-400 '>Europe</span>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur. <br /> adipisicing Aliquid inventore dolorem ipsum quod.</p>
          
          <div className=" w-[400px]  mt-10 flex  ">
            <div className="flex items-center mr-4">
            <IoIosContact className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">8.66 M People</p>
            </div>
            <div className="flex items-center mr-4">
            <BiWorld className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">41.290 KM2</p>
            </div>
            <div className="flex items-center mr-4">
            <AiFillHome className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">$100.200</p>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className=" text-blue-400 border-b-2 border-blue-500 hover:bg-blue-400 hover:text-white py-1 px-4 rounded-full">
                <button>Explore More</button>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className='ml-2 md:ml-10 mt-10 pb-2 flex'>
          <div className='flex flex-col md:flex-row '>
            <div>
          <Image src="/image2.jfif" alt="Caribbean" width={250} height={250} className="rounded-lg w-52 h-60 bg-cover"/>
          </div>
          <div className='md:pl-4'>
            <h1 className='text-xl font-bold mt-5 md:mt-0'>CARIBBEAN</h1>
            <span className='text-sm text-gray-400 '>North America</span>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur. <br /> adipisicing Aliquid inventore dolorem ipsum quod.</p>
          
          <div className=" w-[400px]  mt-10 flex  ">
            <div className="flex items-center mr-4">
            <IoIosContact className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">44.48 M People</p>
            </div>
            <div className="flex items-center mr-4">
            <BiWorld className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">275.400 km2</p>
            </div>
            <div className="flex items-center mr-4">
            <AiFillHome className="size-6 text-sky-300" />
            <p className="text-start text-gray-500">$946.000</p>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className=" text-blue-400 border-b-2 border-blue-500 hover:bg-blue-400 hover:text-white py-1 px-4 rounded-full">
                <button>Explore More</button>
            </div>
            </div>
          </div>
        </div>
        </div>

    </div>
    
  )
}


