import React from 'react'

const Hero = () => {
  return (
    <div className=' bg-gray-100 px-10 md:px-20 py-24'>
        <h1 className='text-4xl font-bold'>WELCOME</h1>
        <h1 className='text-xl font-semibold'>Find your favorite movies and TV shows</h1>
        <div className='mt-5 flex'> 
            <input className='w-full max-w-lg py-2 px-4 text-black rounded-l-md bg-white' type="text" placeholder='Search for a movie' />
            <button className='bg-blue-500 px-5 font-semibold text-white hover:bg-blue-600 transition-all duration-300'>Search</button>
        </div>
    </div>
  )
}


export default Hero