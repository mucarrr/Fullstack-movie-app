import React from 'react'
import Hero from '../components/Hero'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import Card from '../components/Card'

function Home() {
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("api/movies").then((res) => res.data)
  })
  console.log(data)
  return (
    <div>
      <Hero />
      <div className='px-10 md:px-20 py-10 bg-[#A830E5]'> 
      {
        isLoading ? (<div className='flex justify-center items-center h-screen'>Loading...</div>) : error ? (<div className='flex justify-center items-center h-screen'>Error: {error.message}</div>) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              data.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))
            }
          </div>
        ) 
      }
      </div>
    </div>
  )
}

export default Home