// import React, { useEffect ,useState } from 'react'
import Sidebar from './sidebar'
 import axios from 'axios'
 import { useEffect , useState } from 'react'
import {Link , useParams , useNavigate} from 'react-router-dom'
const Footer= () => {
const [data , setData]= useState({})
 const {id} = useParams()
 const navigate = useNavigate()

 useEffect(()=>{



  async function fetchData() {
   await axios.get(`http://localhost:3000/footer/`+id)
   .then(res=>{
    setValues({...values , email:res.data[0].email , phone:res.data[0].phone , location:res.data[0].location ,
       facebook:res.data[0].facebook , instagram:res.data[0].instagram , twitter:res.data[0].twitter })
   }
  ).catch(err=>console.log(err))
    
  }
  fetchData();
    }, [])

const [values , setValues]= useState({
      Email:'',
      Phone:'',
      Location:'',
      facebook:'',
      Instagram:'',
      Twitter: ''
    })

  const handleUpdate =(e)=>{
      e.preventDefault();
      axios.put('http://localhost:3000/footerup/'+id , values)
      .then(res=>{
        console.log(res)
        navigate(`/footer`)
        location.reload()
    })
      .catch(err=>console.log(err))

    }


useEffect(()=>{
  axios.get('http://localhost:3000/footer')
  .then(res=>setData(res.data[0]))
  .catch(err=>console.log(err))
},[])
console.log(data)

  return (
      <div className='grid  grid-cols-5 min-h-screen'>  
        <Sidebar/>
        <div className='ml-[30px] mr-[30px] w-full relative col-span-5 lg:col-span-4 lg:ml-[230px]'>
          <h1 className='text-2xl md:text-3xl mt-[5px] lg:text-5xl text-center'>Welcome to Info</h1>
          <form onSubmit={handleUpdate } className='w-[90%] mx-auto bg-gray-100 px-[10px] py-[10px] min-h-[200px] rounded-md flex flex-col justify-center mt-[20px]'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:py-[10px] lg:px-[10px]'>
              <div className='w-full'>
              <input value={values.email} onChange={(e)=>setValues({...values , email:e.target.value})}  type="text" placeholder='Email' className='border-1 w-full border-gray-400 outline-0 py-[5px] rounded-md'/>
              </div>
              <div  className='w-full'>
              <input value={values.phone} onChange={(e)=>setValues({...values , phone:e.target.value})}   type="text" placeholder='Phone'  className='w-full border-1 border-gray-400 outline-0 py-[5px] rounded-md'/>
              </div>
              <div  className='w-full'>
              <input value={values.location} onChange={(e)=>setValues({...values , location:e.target.value})}   type="text" placeholder='Location'  className='w-full border-1 border-gray-400 outline-0 py-[5px] rounded-md'/>
              </div>
              <div  className='w-full'>
              <input value={values.facebook} onChange={(e)=>setValues({...values , facebook:e.target.value})}  type="text" placeholder='facebook'  className='w-full border-1 border-gray-400 outline-0 py-[5px] rounded-md'/>
              </div>
              <div>
              <input  value={values.instagram} onChange={(e)=>setValues({...values , instagram:e.target.value})}   type="text" placeholder='Instagram'  className='w-full border-1 border-gray-400 outline-0 py-[5px] rounded-md'/>
              </div>
              <div  className='w-full'>
              <input  value={values.twitter} onChange={(e)=>setValues({...values , twitter:e.target.value})}  type="text" placeholder='twitter'  className=' w-full border-1 border-gray-400 outline-0 py-[5px] rounded-md'/>
              </div>
            </div>
            <div className='text-center mt-[30px]'>
              <button className='lg:w-[150px] cursor-pointer bg-blue-700 border-0 outline-0 p-[5px] text-white w-[100px] text-center rounded-md'>submit</button>
            </div>
          </form>
          <div className='mt-[20px] mr-[10px] w-full overflow-scroll'>
            <table className='mr-[30px]'>
              <thead>
                <tr>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Location</td>
                  <td>facebook</td>
                  <td>Instagram</td>
                  <td>Twitter</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td>
                        {data.email}
                      </td>
                      <td>
                        {data.phone}
                      </td>
                      <td>
                        {data.location}
                      </td>
                      <td>
                        {data.facebook}
                      </td>
                      <td>
                        {data.instagram}
                      </td>
                      <td>
                        {data.twitter}
                      </td>
                      <td>
                        <Link to={`/footer/${data.id}`}>
                            <button  onClick={(e)=>{location.reload() , e.stopPropagation()} } className=' mt-[3px] mb-[3px] ml-[10px] cursor-pointer outline-0 border-0 rounded-sm bg-green-700 text-white py-[3px] px-[3px]'>
                              <svg className=' h-[15px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>
                            </button>
                          </Link>
                       
                      </td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
    
    </div>

    
  )
}

export default Footer