import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Button = ({id}) => {
    const navigate = useNavigate();
  const handleDelete = () => {
    api.delete(`api/movies/${id}`).then((res) => {
      console.log(res);
      navigate("/");
      toast.success("Movie deleted successfully");
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div>
          <button onClick={handleDelete} className='bg-blue-500 px-5 py-2 rounded-md font-semibold text-white hover:bg-blue-600 transition-all duration-300'><FaTrashAlt /></button>
        </div>
  )
}

export default Button