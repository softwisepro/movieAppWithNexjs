"use client"
import React, { useState } from 'react'
import { TbPlayerTrackNext } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Header = () => {

  const [keyword,setKeyword] = useState("");
  const router = useRouter();

  const searchedItem = (e)=>{
      if(e.key === "Enter" && keyword.length>3){
        router.push(`/search/${keyword}`)
        setKeyword("")
      }
  } 
    

  return (
    <div className=' bg-black text-white p-5'>
       <div className='container mx-auto flex flex-col gap-4 '>
       <Link href={"/"} className='flex items-center mx-auto gap-2'>
            <TbPlayerTrackNext className='text-5xl'/>
            <span className='font-bold text-4xl'>NEXXT <span className='text-2xl font-normal'>movies</span></span>
        </Link>
        <div className='flex flex-1 items-center gap-5'>
            <input value={keyword} onKeyDown={searchedItem} onChange={(e)=>setKeyword(e.target.value)} type="text" placeholder='Search Movie' className='flex-1 rounded-lg text-black outline-none p-2'/>
            <BiSearch size={30}/>
        </div>
       </div>
    </div>
  )
}

export default Header
