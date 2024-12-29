'use client'
import { useEffect } from "react"
function Error({error} : {error : Error}) {
    useEffect(() => {

    }, [error])
  return (
    <div className="flex items-center justify-center h-[80vh]">
        <h2 className="text-2xl text-yellow-300">Failed to fetch data</h2>
    </div>
  )
}

export default Error