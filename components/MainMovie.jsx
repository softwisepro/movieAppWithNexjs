import Image from 'next/image'
import React from 'react'
import batman from "../assets/batman.jpeg"
const MainMovie = () => {
  return (
    <div className='h-[50vh] relative'>
    <div className="relative w-full h-full">
      <Image src={batman} alt="movie" fill className='object-cover object-top z-[-1]' />
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <h1 className='text-7xl font-bold text-white text-s absolute top-1/3 left-1/2 mix-blend-difference  -translate-x-1/2 -translate-y-1/2 text-center z-20 w-xl '>
        The DARK KNIGHT RISES
      </h1>
      <button className='text-5xl  font-bold text-yellow-600 border-yellow-600 border-2 p-9 rounded-lg absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/5 text-center z-20 hover:bg-yellow-600 hover:text-black transition-all '>Watch Trailer</button>
    </div>
  </div>
  )
}

export default MainMovie
