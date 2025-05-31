import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Button from '../components/Button'

const Detail = () => {
  const {id} = useParams();
  console.log(id);
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ["movie", id],
    queryFn: () => api.get(`api/movies/${id}`).then((res) => res.data)
  })
  console.log(data);
  if(isLoading) return <Loader />
  if(error) return <Error info={error} refetch={refetch}/>
  return (
    <div className='max-w-[800px] mx-auto bg-gray-200'>
      <div className='p-10 flex justify-between'>
        
        <div className="flex flex-col gap-10 max-w-[500px] mx-auto">
          <div className='flex items-center justify-center'>
            <img src={`https://picsum.photos/seed/${data.id}/200/300`} alt="" />
          </div>
          <div className='flex flex-col gap-10 items-center'>
            <div className='flex flex-col gap-3 bg-white p-5 rounded-md'>
              <h1 className='text-2xl font-bold'>{data.title}</h1>
              <p className='text-gray-700'>{data.description}</p>
            </div>
            <div className=' bg-white p-5 rounded-md items-center'>
            <div className='flex flex-col gap-3'>
            <Field label="Duration" value={data.duration} />
            <Field label="Language" value={data.language} />
            <Field label="Year" value={data.year} />
            <Field label="Rating" value={data.rating} />
            <Field label="Director" value={data.director} />
            <ListField label="Genre" values={data.genre} />
            <ListField label="Cast" values={data.cast} />
            </div>
            </div>
            
          </div>
        </div>
        <Button id={id}/>
      </div>
    </div>
  )
}

export default Detail

const Field = ({label, value}) => {
  return (
    <p>
      <span className='font-bold me-2'>{label}: </span>
      <span className='bg-red-200 p-2 px-4 rounded-full font-semibold'>{value}</span>
    </p>
  )
}
const ListField = ({label, values}) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold me-2'>{label}: </span>
      <div className='flex flex-wrap gap-2'>
        {values?.map((item) => (
          <span key={item} className='bg-red-200 p-2 px-4 rounded-full font-semibold'>{item}</span>
        ))}
      </div>
    </div>
  )
}