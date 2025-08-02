import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='text-center mt-[100px]'>
      <h1 className='text-4xl'>404</h1>
      <p>Page Not Found</p>

      <Link to ='/'>
        <button className='bg-black text-white outline-0 border-0 p-[5px] rounded-md cursor-pointer'>Go Back</button>
      </Link>
    </div>
  )
}

export default Notfound