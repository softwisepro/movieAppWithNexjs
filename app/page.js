

import MovieCard from '@/components/MovieCard';
import React from 'react'


const getMoviesByGenre = async (genre) => {
  const resp = await fetch(`https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
    next: {
      revalidate: 60
    }
  })
  const data = await resp.json()
  return data;
}
const getMixMovies = async (genre) => {
  const resp = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`, {
    next: {
      revalidate: 60
    }
  })
  const data = await resp.json()
  return data;
}


const Home = async ({searchParams}) => {

  console.log(searchParams.genre); // hangi url uzerinde oldugumuzu gosteriyor

  const movieByGenre =  getMoviesByGenre(searchParams.genre);
  const movieMix =  getMixMovies();
  
  const [dataGenre, dataMix] = await Promise.all([
    movieByGenre,movieMix
  ])

  console.log(searchParams.genre);

  return (
    <div className='container  flex flex-col gap-[5rem] bg-zinc-200 py-[4rem] mx-auto '>
      <h2 className='text-4xl text-center underline underline-offset-8 tracking-widest  font-semibold text-yellow-600 '>{searchParams?.genre?.toUpperCase().replace(/_/g, ' ')}</h2>
      <div className='flex justify-center  gap-[2.5rem]  flex-wrap'>
      {
        !searchParams.genre  ?  dataMix?.results?.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        )) : dataGenre?.results?.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))
      }
      </div>
    </div>
  )
}

export default Home
