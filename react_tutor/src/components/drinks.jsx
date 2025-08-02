import axios from 'axios'
import React, { useState , useEffect } from 'react'



const Drinks = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/juice')
        .then(res=>setData(res.data)).
        catch((err)=>err)
}, [])
  return (
    <div className='flex flex-col min-h-screen w-[95%] mb-[40px]  mx-auto'>
        <div id="softDrinks"className='mb-[20px]'>
            <h1 className='text-gray-700 text-2xl md:text-4xl text-center font-semibold'>Hot & Soft Drinks</h1>
              <div className=' grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-[20px]'>

                {
                data.map(item=>{
                    if(item.category=="Beverage"){
                        return(
                            
                
                        <div key={item.id} className='text-gray-700 h-[300px]  rounded-md shadow-xs shadow-gray-500'>
                            <img src={`http://localhost:3000/images/`+item.img} className='w-full h-[85%] rounded-md'  />
                            <div  className='flex text-sm md:text-md md:font-semibold justify-between mx-[5px] md:mx-[20px]'>
                                <p >{item.name}</p>
                                <p >{item.price}Birr</p>
                            </div>
                        </div>
                        )
                    }
                    })
            

            }
                

            </div>
            
        </div>

        <div id="juice">
            <h1 className='text-gray-700 text-2xl md:text-4xl text-center font-semibold'>Juice and Desssert</h1>
            <div className=' grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-[20px]'>

                {
                data.map(item=>{

                    if(item.category=="juice"){
                         return(
                       
            
                    <div  key={item.id}  className='text-gray-700 h-[300px]  rounded-md shadow-xs shadow-gray-500'>
                        <img  src={`http://localhost:3000/images/`+item.img}  className='w-full h-[85%] rounded-md'  />
                        <div className='flex text-sm md:text-md md:font-semibold justify-between mx-[5px] md:mx-[20px]'>
                            <p>{item.name}</p>
                            <p>{item.price}Birr</p>
                        </div>
                    </div>
                    )
                    } 
                    })
            

               }
                

            </div>
        </div>
        
    </div>
  )
}

export default Drinks