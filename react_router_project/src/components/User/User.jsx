import React from 'react'

// if you read url value then need param 
import { useParams } from 'react-router-dom';
function User() {
    const {id}=useParams();
  return (
    <div className='bg-gray-600 p-10 text-white text-3xl text-center font-extrabold'>
      User:{id}
    </div>
  )
}

export default User
