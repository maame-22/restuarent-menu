import React , {useState , useEffect}from 'react'
import axios from 'axios'

const Footer = () => {
const [data , setData]= useState({})

useEffect(()=>{
  axios.get('http://localhost:3000/footer')
  .then(res=>setData(res.data[0]))
  .catch(err=>console.log(err))
},[])
//  console.log(data)

  return (
    <div className='bg-gray-800 w-full min-h-[50vh] pl-[40px] md:m-h-[20vh]  text-white flex flex-col md:flex-row md:justify-around pt-[20px]'>
        <div>
           <h1 className='text-xl md:text-2xl'>Contact Us</h1> 
             <div className='mt-[5px] md:mt-[30px]'>
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

                <p>
                    {data.phone}
                </p>
              </div>
              <div className='flex mt-[8px] mb-[8px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

                <address>
                 {data.location} 

                </address>
              </div>
              <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" className='' />
              </svg>
              <p>
                {data.email}
              </p>
               
              </div>
            </div>
        </div>

        <div className='mt-[10px] mb-[10px] md:mt-0 md:mb-0'>
           <h1 className='text-xl md:text-2xl'>Menu</h1> 
           <ul className='mb-[10px] mt-[5px]  md:mt-[30px]'>
                <li><a href='#breakfast'>Breakfast</a></li>
                <li><a href='#lunch'>Lunch & Dinner</a></li>
                <li><a href='#softDrinks'>Hot & Soft Drinks</a></li>
                <li><a href='#juice'>Juice & Desserts</a></li>
           </ul>
        </div>
        <div className='mb-[30px]'>
            <h1 className='text-xl md:text-2xl'>Follow Us</h1>
            <div className='mt-[5px] md:mt-[30px]'>
                <p><a href={data.facebook} target='blank'>Facebook</a></p>
                <p><a href={data.instagram} target='blank'>Instagram</a></p>
                <p><a href={data.twitter} target='blank'>Twitter</a></p>
            </div>
        </div>
        

    </div>
  )
}

export default Footer