"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const MovieCard = ({movie}) => {

    const router = useRouter()



  return (
  
    <div onClick={()=>router.push(`/movie-detail/${movie.id}`)} className='flex flex-col items-center gap-5 w-[300px] h-[100%] bg-zinc-100  pb-4  rounded-[20px] overflow-hidden hover:scale-110 transition-all cursor-pointer ' >
      <div className='w-[300px] h-[400px] relative'>
      <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} alt="poster" fill />
      </div>
      <div className='text-center flex flex-col gap-5 p-3 '>
      <span className='text-yellow-600 h-[30px]'>{movie.title.toUpperCase()}</span>
      <p className='text-zinc-900 font-thin'>{movie.overview.slice(0,90)}...  </p>
      <span className='text-yellow-600 font-bold text-sm cursor-pointer'>see more</span>
      <span className='text-yellow-600 text-sm'>{movie.vote_average} / {movie.original_language.toUpperCase()} / {movie.release_date}</span>
      </div>
    </div>
  )
}

export default MovieCard
