"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {

const searchParams = useSearchParams()
const genre = searchParams.get('genre')

console.log(genre);

    const tabs = [
        {
            name:"Popular Movies",
            url:"popular"
        },
        {
            name:"Top Rated",
            url:"top_rated"
        },
        {
            name:"Upcoming",
            url:"upcoming"
        }
    ]

  return (
    <div className='p-5 bg-gray-100 flex items-center justify-center gap-5 text-lg text-transform: uppercase text-gray-500'>
      {
        tabs.map((tab,i)=>(
            <Link href={`/?genre=${tab.url}`} key={i} className={`cursor-pointer hover:text-black transition-colors ${tab.url === genre ? "underline underline-offset-8 text-yellow-600 font-bold" : ""}`}>{tab.name}</Link>
        ))
      }
    </div>
  )
}

export default Tabs
