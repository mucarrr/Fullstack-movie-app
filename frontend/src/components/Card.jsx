import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({movie}) => {

    const r = movie.rating;
    const color = r > 9 ? 'bg-red-500' : r > 8 ? 'bg-green-500' : 'bg-yellow-500';
  return (
    <Link to={`/movie/${movie.id}`} className='flex p-4 border shadow bg-white rounded-lg   '>
        <div className='relative w-1/2'>
            <img src={`https://picsum.photos/seed/${movie.id}/200/300`} alt='poster' className='w-full h-full object-cover rounded-lg'></img>
            <span className={`absolute top-[-15px] right-[-15px] text-white px-2 py-1 rounded-full ${color} h-8 w-8 flex items-center justify-center`}>
                {movie.rating}
            </span>
            <span className='absolute bottom-0 left-0 bg-gray-900 text-white px-2 py-1 rounded-tr-md'>
                {movie.year}
            </span>
        </div>
        <div className="flex flex-col justify-between pl-6 w-1/2">
            <h3 className='text-xl font-bold'>
                {movie.title}
            </h3>
            <div className='flex flex-col gap-2'>
                <p className='flex gap-2 flex-wrap'>
                    {movie.genre.map((genre) => (
                        <span key={genre} className='text-sm bg-gray-200 px-2 py-1 rounded-full'>
                            {genre}
                        </span>
                    ))}
                </p>
                <div className='text-sm bg-red-200 px-2 py-1 rounded-full max-w-[100px] text-center'>{movie.language}</div>
            </div>
        </div>
    </Link>
        
   
  )
}

export default Card