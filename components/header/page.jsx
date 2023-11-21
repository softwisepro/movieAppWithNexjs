import Image from 'next/image'
import React from 'react'
import logo from "../../assets/next.png"
import {BiSearch} from "react-icons/bi"

const Header = () => {
  return (
    <header className='bg-black py-5'>
        <div className="logo flex items-center gap-4">
            <Image src={logo} width={50} height={100} className='bg-white rounded-full' />
            <span className='text-3xl text-white'>NEXXT</span>
            <div className='ml-auto flex items-center relative '>
            <input type="text" placeholder='Search Movie' className='p-2 w-[400px] rounded-md ' />
            <BiSearch className=' text-3xl absolute right-2'/>
            </div>
        </div>
    </header>
  )
}

export default Header
