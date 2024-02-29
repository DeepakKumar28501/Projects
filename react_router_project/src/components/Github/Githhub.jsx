import React, { useEffect, useState } from 'react'

function Githhub() {
    // call github 
const [data,setData]=useState([]);

    useEffect(()=>{
        // it is call when component is call 
        fetch('https://api.github.com/users/DeepakKumar28501').then(Response=>Response.json()).then(data=>{
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-900 text-white text-3xl p-4'>
      Gihub Followers:{data.followers}
    </div>
  )
}

export default Githhub
