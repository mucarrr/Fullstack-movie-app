import React from 'react'
import Inputs from '../components/Inputs'
import api from '../utils/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    data.genre = data.genre.split(',')
    data.cast = data.cast.split(',')
    console.log(data)
    api.post('/api/movies', data)
    .then((res)=>{
      toast.success('Movie created successfully')
      navigate(`/movie/${res.data.id}`)
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })
  }
  return (
    <div className='min-h-screen bg-[#DC9438] flex items-center justify-center'>
      <div className="bg-gray-200 w-full max-w-[500px] p-10 rounded-xl mt-4">
<form className='flex flex-col gap-5' onSubmit={handleSubmit}>
  <h1 className='text-center text-2xl font-bold'>Add a new movie</h1>
  <Inputs />

  <button type='submit' className='border py-3 px-4 rounded-lg bg-blue-500 text-white'>Create</button>
</form>
      </div>
    </div>
  )
}

export default Create