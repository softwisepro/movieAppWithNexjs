import Image from 'next/image';
import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link';
import MovieCard from '@/components/MovieCard';
const MovieDetails = async ({params}) => {

    console.log(params.id);

    const resp = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
      next: {
        revalidate: 60
      }
    })
    const data = await resp.json()

    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
      next: {
        revalidate: 60
      }
    })
    const similar = await res.json()
    console.log(similar);

  return (
    <>
    <div className=' container flex flex-col items-center gap-[5rem]  bg-zinc-200 py-[4rem]  mx-auto relative min-h-screen  '>
        <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="poster" fill className='bg-image object-cover object-center '/>
        <div className={`absolute rounded-xl  h-2/4 max-[600px]:h-3/4  p-[2rem] flex items-center flex-col justify-center  gap-[3rem] ${styles.glass}`}>
           <h2 className=' text-4xl max-[600px]:text-2xl text-center font-bold text-white'>{data.title.toUpperCase()}</h2>
           <span className='text-yellow-200  text-md'>{data.vote_average} / {data.original_language.toUpperCase()} / {data.release_date}</span>
           <p className='text-1xl font-light  w-3/4 max-[600px]:w-[100%] text-white  text-justify'>{data.overview}</p>
           
           <ul className='flex flex-col text-sm '>
                <li className='text-white '><span className='text-yellow-200 '>Official Site :</span> <Link href={data.homepage}>{data.homepage}</Link></li>
                <li className='text-white '><span className='text-yellow-200 '>Country :</span> {data.production_countries[0]?.name}</li>
                <li className='text-white '><span className='text-yellow-200 '>Languages :</span>
                {
                    data.spoken_languages.map((lang)=>(
                        <span key={lang.iso_639_1}> {lang.name}{","} </span>
                    ))
                }
                  </li>
           </ul>
          
        </div>
       
    </div>
     <div className='container  flex flex-col gap-[5rem] bg-zinc-200 py-[4rem] mx-auto '>
     <h2 className='text-4xl text-center underline underline-offset-8 tracking-widest  font-semibold text-yellow-600 '>SIMILAR MOVIES</h2>
     <div className='flex justify-center  gap-[2.5rem] flex-wrap'>
     {
       similar?.results?.slice(0,8).map((movie)=>(
         <MovieCard key={movie.id} movie={movie}/>
       ))
     }
     </div>
   </div>
    </>
  )
}

export default MovieDetails
