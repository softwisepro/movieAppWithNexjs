"use client"
import React, { useState } from 'react'
import { TbPlayerTrackNext } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Header = () => {

  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const searchedItem = (e) => {
    if (e.key === "Enter" && keyword.length > 3) {
      router.push(`/search/${keyword}`)
      setKeyword("")
    }
  }


  return (

    <nav class="bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">

          <div class="flex space-x-4">
            <div>
              <Link href="/" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span class="font-bold">LetMeStream</span>
              </Link>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <div className='flex flex-1 items-center gap-5'>
                <input value={keyword} onKeyDown={searchedItem} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder='Search Movie' className='flex-1 rounded-lg text-black outline-none p-2' />
                <BiSearch size={30} />
              </div>
              <Link href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Genry</Link>
              <Link href="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Movies</Link>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-1">
            <div className='flex flex-1 items-center gap-5'>
              <input value={keyword} onKeyDown={searchedItem} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder='Search Movie' className='flex-1 rounded-lg text-black outline-none p-2' />
              <BiSearch size={30} />
            </div>
            <Link href="" class="py-5 px-3">Login</Link>
          </div>

          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div class="mobile-menu hidden md:hidden">
        <div className='flex flex-1 items-center gap-5'>
          <input value={keyword} onKeyDown={searchedItem} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder='Search Movie' className='flex-1 rounded-lg text-black outline-none p-2' />
          <BiSearch size={30} />
        </div>
        <Link href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</Link>
        <Link href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</Link>
      </div>
    </nav>
  )
}

export default Header
