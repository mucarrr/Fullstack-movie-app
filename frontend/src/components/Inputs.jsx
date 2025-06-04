import React from 'react'
import { inputs } from '../utils/constants'

const Inputs = () => {
  return (
    <div className='flex flex-col gap-8'>
        {inputs.map((input)=>(
            <div key={input.name} className='relative'>
                <input 
                    type={input.type} 
                    name={input.name} 
                    min={input.min} 
                    max={input.max} 
                    placeholder=" " 
                    className='w-full border py-3 px-4 rounded-lg focus:outline-none focus:border-blue-500 peer' 
                />
                <label 
                    htmlFor={input.name} 
                    className="absolute left-4 top-4 text-sm font-normal text-gray-500 duration-300 transform bg-gray-200 px-2
                      peer-focus:-top-2.5
                      peer-focus:text-xs
                      peer-placeholder-shown:top-4
                      peer-placeholder-shown:text-sm
                      peer-not-placeholder-shown:-top-2.5
                      peer-not-placeholder-shown:text-xs
                    "
                >
                    {input.label}
                </label>
            </div>
        ))}
    </div>
  )
}

export default Inputs