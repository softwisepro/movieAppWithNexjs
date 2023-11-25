import MovieCard from '@/components/MovieCard';
import React from 'react'



const SearchMovies = async ({params}) => {

  const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.keyword}&language=en-US&page=1`, {
    next: {
    revalidate: 60
    }
  })
  const data = await resp.json()

  console.log(data);

  return (
    <div className='container  flex flex-col gap-[5rem] bg-zinc-200 py-[4rem] mx-auto '>
      <div className='flex justify-center  gap-[2.5rem]  flex-wrap'>
      {
        data?.total_results === 0 ? <h2 className='text-4xl text-center underline underline-offset-8 tracking-widest  font-semibold text-yellow-600 '>Movie not found</h2> : data?.results?.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))
      }
      </div>
    </div>
  )
}

export default SearchMovies
