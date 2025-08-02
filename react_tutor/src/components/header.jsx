
import { useState , useEffect } from 'react'
import axios from 'axios'






const Header = () => {

 const [data , setData] = useState([])
    useEffect(()=>{
     axios.get('http://localhost:3000/food')
        .then(res=>setData(res.data)).
        catch((err)=>err)
}, [])
 
  return <>
    {/*hero section of the website  */}
   
    {/* breakfast card */}
    <div id="breakfast" className='text-gray-700 mt-[50px] text-center flex flex-col w-[95%] min-h-screen mx-auto'>
        <h1 className='text-3xl md:text-4xl font-semibold '>Breakfast</h1>
        <div className=' mt-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 h-full mb-[20px]'>
            {
                data.map(item=>{
                    if(item.category=="Breakfast"){

                        return(
                            <div key={item.id} className=' rounded-lg h-[280px] shadow-xs shadow-gray-500 cursor-pointer'>
                                <img  src={`http://localhost:3000/images/`+item.img} alt="liver breakfast" className='w-full h-[70%] rounded-lg' />
                                <div  className='flex justify-between md:px-[5px] text-sm md:text-md md:font-semibold mt-[5px]' >
                                    <p  className='ml-[5px] md:ml-[15px]' >{item.name}</p>
                                    <p  className='mr-[5px] md:mr-[15px]'>{item.price}Birr</p>
                                </div>
                                <p className='text-xs md:text-sm pb-[8px] text-start ml-[5px] md:ml-[20px] text-gray-600'>{item.ingra}</p>
    
                            </div>
                        )
                    }
                })
            }
            
           


        </div>
   </div>
   {/* lunch card */}
    <div id="lunch" className='text-gray-700 mt-[15px] md:mt-[50px] text-center flex flex-col w-[95%] min-h-screen mx-auto'>
    <h1 className='text-2xl md:text-4xl font-semibold '>Lunch & Dinner</h1>
    <div className='mt-[30px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-full mb-[20px]'>
        {
            data.map(item=>{
                if(item.category=="Lunch"){

                    return(
                        <div key={item.id} className=' rounded-lg h-[280px] shadow-xs shadow-gray-500 cursor-pointer'>
                            <img  src={`http://localhost:3000/images/`+item.img} alt="liver breakfast" className='w-full h-[70%] rounded-lg' />
                            <div  className='flex justify-between md:px-[5px] text-sm md:text-md mt-[5px] md:font-semibold' >
                                <p  className='ml-[5px] md:ml-[15px]' >{item.name}</p>
                                <p className='mr-[5px] md:mr-[15px]'>{item.price}Birr</p>
                            </div>
                            <p className='text-xs md:text-sm pb-[8px] text-start ml-[5px] md:ml-[20px] text-gray-600'>{item.ingra}</p>
    
                        </div>
                    )
                }
            })
        }
        
        


    </div>
    </div>
   
  </>
}

export default Header