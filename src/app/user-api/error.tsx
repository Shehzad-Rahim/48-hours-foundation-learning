'use client'
import React, { useEffect } from 'react'

function error({error} : {error : Error}) {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div className='flex justify-center items-center h-[80vh]'>
    <div>
        <h2 className="text-2xl text-yellow-300">Error fetching users data ⚠</h2>
    </div>
</div>
  )
}

export default error