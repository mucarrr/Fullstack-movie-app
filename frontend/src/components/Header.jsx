import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center px-8 py-6 shadow-md '>
        <Link to="/">
        <h1 className='text-4xl font-bold tracking-tighter text-[#DC9438]'>Movie App</h1>
        </Link>
        <Link to="/create">
        <button className='border px-6 py-2 rounded-full bg-gray-400 text-white hover:bg-gray-500 transition-all duration-300'>Create a movie</button></Link>
    </div>
  )
}

export default Header;