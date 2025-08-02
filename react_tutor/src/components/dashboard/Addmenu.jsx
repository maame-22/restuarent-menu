import React from 'react'

import Sidebar from './sidebar'

const Addmenu = () => {
  return (
     <div className='grid  grid-cols-5 min-h-screen'>  
      <Sidebar/>
      <div className='mx-[10px] mb-[30px] lg:ml-[250px] mt-[15px]  w-full col-span-5 lg:col-span-4  '>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-center '>Welcome To Menu Page</h1>
        <div  className='flex gap-6 mt-[40px] text-lg'>
          <h4 className='relative'>Reservations <span className='w-[80px] h-[2px] bg-orange-600 mt-[5px] rounded-sm absolute bottom-0 left-[15%]'></span> </h4>
          <h4>Visitors</h4>
          <h4>Orders</h4> 
        </div>
        <h2 className='mt-[50px] font-semibold text-xl'>Quick Update Of This Week</h2>
        <div className='w-full md:w-[90%] mt-[50px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '>
            <div className=' h-[200px] bg-blue-900 text-white rounded-md flex flex-col justify-center text-center  '>
              <h3 className='text-2xl font-semibold'>2.3k</h3>
              <h6 className='text-xl'>Orders</h6>
            </div>
            <div className=' h-[200px] bg-gray-700 rounded-md text-white flex flex-col justify-center text-center  '>
             
              <h3 className='text-2xl font-semibold'>5.5K</h3>
              <h6 className='text-xl'>Visitors</h6>
            </div>
            <div className=' h-[200px] bg-green-900 rounded-md text-white flex flex-col justify-center text-center '>
              <h3 className='text-2xl font-semibold'>3.5K</h3>
              <h6 className='text-xl'>Reservations</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addmenu