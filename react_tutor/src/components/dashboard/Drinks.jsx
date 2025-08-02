import React, { useEffect ,useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Drinks= () => {
  const [showModal , setshowModal]= useState(false)

  const [data , setData] = useState([])
  const [name , setName] = useState('')
  const [price , setPrice] = useState('')
  const [category , setCategory] = useState('')
  const [image , setImage] = useState()

  const handleFile = (e)=>{
    setImage(e.target.files[0])
  }
  function handleSubmit(e){
     e.preventDefault()
     const formdata = new FormData()
     formdata.append('file' , image)
     formdata.append('name' , name)
     formdata.append('price' , price)
     formdata.append('category' , category)

     axios.post('http://localhost:3000/drinks' , formdata)
     .then(res=>{
      if(res.status==="successful"){
        setshowModal(false)
      }else{
        console.log('failed')
      }
     }
     ).catch(err=>console.log(err))
  }

  const handleDelete =(id)=>{
    axios.delete('http://localhost:3000/deleteDrinks/'+id)
    // eslint-disable-next-line no-unused-vars
    .then(res=>{
      location.reload()
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    axios.get('http://localhost:3000/juice').then(res=>setData(res.data)).catch(err=>console.log(err))
  },[])
  return (
      <div className='grid  grid-cols-5 min-h-screen'>  
        <Sidebar/>
        <div className=' ml-[30px] col-span-5 w-full relative lg:col-span-4 lg:ml-[230px] min-h-screen  mb-[50px]'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl text-center'>Welcome To Drinks</h1>
          <div className='mt-[50px]'>
            <div className='text-end w-[90%]'>
              <button onClick={()=>setshowModal(true)} className='cursor-pointer bg-blue-700 border-0 outline-0 p-[5px] text-white w-[100px] text-center rounded-md'>Add</button>

            </div>
            <div className='w-full overflow-y-scroll overflow-x-scroll mb-[100px]'>
              <table className=' table-auto w-[90%] mx-auto mt-[20px]'>
                <thead>

                  <tr>
                  
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  data.map(item=>{
                      return(
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.price}Birr</td>
                              <td>{item.img}</td>
                              <td className='flex justify-center gap-4'>
                                <button onClick={()=>handleDelete(item.id)}   className='mt-[3px] mb-[3px] cursor-pointer outline-0 border-0 rounded-sm  bg-red-700  text-white py-[3px] px-[3px]'>
                                  <svg className='h-[15px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                                <Link to={`/editDrinks/${item.id}`}>
                                  <button className='mt-[3px] mb-[3px] cursor-pointer outline-0 border-0 rounded-sm bg-green-700 text-white py-[3px] px-[3px]'>
                                    <svg className=' h-[15px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                  </button>
                                </Link>
                                


                              </td>
                          </tr>
                      )

                  })
                  }
                
                    
                  
                </tbody>
              </table>
            </div>

          </div>
          
        </div>
        {
          showModal &&(
            <div className='absolute top-[10%] right-[5%] w-[90%] md:top-[5%] md:right-[18%] md:w-[50%] lg:right-[25%] bg-gray-100 lg:w-[35%] min-h-[60vh] rounded-md'>
              <div className='flex justify-between items-center p-[10px]'>
                <h1 className='text-2xl font-semibold'>Add Drinks</h1>
                <svg className='cursor-pointer font-bold w-[20px] ' onClick={()=>setshowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </div>
              <form  className='w-[95%] ml-[10px] mt-[30px]' onSubmit={handleSubmit}>
                <div className='w-full mb-[15px]'>
                  <input  onChange={(e)=>setName(e.target.value)} className='w-full outline-0 border-0 border-1 border-gray-400 rounded-md py-[5px]' type="text"  placeholder='Name'/>
                </div>
                <div className='w-full mb-[15px]'>
                  <input onChange={(e)=>setPrice(e.target.value)} className='w-full outline-0 border-0 border-1 border-gray-400 rounded-md py-[5px]' type="number"  placeholder='Price'/>
                </div>
                <div className='w-full mb-[15px]'>
                 <select value={setCategory} onChange={(e)=>setCategory(e.target.value)} className='w-full outline-0 border-0 border-1 border-gray-400 rounded-md py-[5px]'>
                  <option >Select Drink</option>
                  <option >Beverage</option>
                  <option >Juice</option>
                </select>
                </div>
                <div>
                 <input onChange={handleFile} className='w-full outline-0 border-0 border-1 border-gray-400 rounded-md py-[5px]' type="file" />
                </div>
                <div className='text-end'>
                  <button onClick={(e)=>{location.reload(), e.stopPropagation()}} className=' cursor-pointer w-[100px] py-[5px] rounded-md bg-blue-700 border-0 outline-0 text-white mt-[15px]'>Submit</button>
                </div>
               


              </form>

            </div>

          )
        }
    </div>

    
  )
}

export default Drinks