import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function Card({imagen, nombre,precio, precio_despues}) {
    const navigate = useNavigate()
  return (
    <div onClick={
        () => {
            navigate('/details', {
                state: {
                    imagen,
                    nombre,
                    precio,
                    precio_despues
                }
            })
        }
    } 
    className='flex flex-col w-auto h-auto shadow-2xl rounded-xl mt-20 mb-10 pt-16 cursor-pointer '>
        <img src={imagen} className='object-contain mb-10' width={'400px'}/>
        <div className='flex flex-col justify-start px-10'>
            <span className='text-gray-500'>{nombre}</span>
            <h1 className='text-md font-extralight'>Before: <s>{precio}</s> </h1>
            <h1 className='text-2xl font-extralight text-red-500 mb-10'>After: {precio_despues}</h1>
        </div>
      
    </div>
  )
}

export default Card
