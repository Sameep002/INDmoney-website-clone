import React from 'react'
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
        <main className='shadow-lg sticky top-0 left-0 bg-white pb-[2px]'>
        <header className='flex space-x-10 max-w-[1200px] mx-auto justify-center items-center my-4 '>
            <div>
                <img className='w-[130px]' src="images/logo.png" alt="logo" />
            </div>
            <div className='flex border border-gray-700 items-center rounded-2xl px-3 w-80  bg-gray-100 focus:border-blue-400'>
                <div className='px-2 w-8'>
                    <BsSearch />
                </div>
                <input className='w-64 px-2 py-2 bg-gray-100 focus:outline-none' type="text" placeholder='Search Stocks, Mutual Funds, etc..' />
            </div>
            <div className='flex items-center space-x-6'>
                <div className='flex space-x-8 justify-center items-center'>
                <span>Explore</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Blog</span>
                <span>Customer Service</span>
                </div>
                <div>
                    <button className='bg-blue-400 px-6 py-2 rounded-md hover:bg-blue-300 text-white'>Login</button>
                </div>
            </div>
        </header>
        </main>
    </>
  )
}

export default Navbar