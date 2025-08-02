import React from 'react'
import {useState} from 'react'
import Logo from '../assets/Logo.png'
import axios from 'axios'
import { LuLoader } from "react-icons/lu"
// import {useNavigate} from 'react-router-dom'



const Navbar = () => {
    const [showModal , setshowModal]= useState(false)
    const [email , setEmail]= useState('')
    const [pass , setPass]= useState('')
    const [isLoading , setIsLoading] = useState(false)
    // const navigate = useNavigate();
    // window.localStorage.setItem("logIn" , false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsLoading(true)
        axios.post('http://localhost:3000/users' , {email , pass})
        .then(res=>{
            if(res.data.status ==="successful"){
                // navigate('/dashboard/')
                localStorage.setItem("logIn" , true)
                setshowModal(false)
                setIsLoading(false)
                return(location.href = '/addmenu')
                // 
            }else{
               setshowModal(false)
               return(location.href = '/')
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div  className=' h-[80vh] w-full bg-[url(./assets/header.jpg)] bg-no-repeat bg-center bg-cover flex flex-col'>
        <nav className=' flex justify-between items-center py-[5px] px-[10px]  bg-transparent text-white'>
            <div className='text-4xl'><img src={Logo} alt="Logo" className='w-[100px] md:w-[160px] h-[70px]' /></div>
            <ul>
                <li id="login" onClick={()=>setshowModal(true)} className='cursor-pointer bg-orange-500 w-[90px] p-[4px] md:w-[150px] md:mr-[30px] md:p-[8px] rounded-md text-md md:text-xl text-center'><a className='mr-[10px] ml-[10px] '>Login</a></li>
            </ul>
        </nav>
        <div className='text-white text-center translate-y-1/5 w-full lg:w-[900px] mx-auto h-full'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Our Menu</h1>
            <p className='text-lg lg:text-2xl '>Here are some of our delicious and most loved items by our customers all over the world.</p>
        </div>
        {
            showModal &&(
                <div className='fixed min-h-screen z-10 w-full bg-black/50 flex justify-center top-0 left-0'>
                    
                    <div className='bg-white w-[80%] h-[50vh] md:w-[30%] md:h-[60vh] rounded-md translate-y-1/6 flex flex-col'>
                        <div className='flex justify-between items-center mx-[10px] my-[15px]'>
                            <p className='text-xl md:text-2xl font-bold uppercase '>
                            Login
                            </p>
                            <svg className='cursor-pointer font-bold w-[20px] ' onClick={()=>setshowModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <form  className='p-[10px]' onSubmit={handleSubmit}>
                            <div className='flex flex-col w-full mb-[20px]'>
                                <label >Email</label>
                                <input  onChange={(e)=>setEmail(e.target.value)} type="email" className='outline-0 border-1 border-gray-500 p-[5px] rounded-sm mt-[10px]' />

                            </div>
                            <div className='flex flex-col w-full mb-[20px]'>
                                <label >Password</label>
                                <input onChange={(e)=>setPass(e.target.value)} type="password" className='outline-0 border-1 border-gray-500 p-[5px] rounded-sm mt-[10px]' />

                            </div>
                            <div>
                                {
                                    !isLoading &&<button className='cursor-pointer bg-orange-500 w-full text-white p-[5px] text-xl rounded-sm'>
                                    Login
                                    </button>
                                }
                                {
                                    isLoading &&<button disabled className=' flex justify-center items-centercursor-pointer bg-orange-500 w-full text-white p-[5px] text-xl rounded-sm'>
                                     <LuLoader />
                                    </button>
                                }
                              
                           
                            </div>
                            
                        </form>
                       
                    </div>
                </div>
            )
        }

  
    </div>
  )
}

export default Navbar