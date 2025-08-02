import React , {useState}  from 'react'
import {NavLink , Navigate} from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

const Sidebar = () => {
  const [closesidebar , setcloseSidebar] = useState(false)
   let [open , setOpen]= useState(false)

  const handleLogout = ()=>{
    localStorage.setItem("logIn" , false)
    return(location.href = '/')
  }
  return (
    <>
    <CiMenuFries className='w-[30px] py-[3px] border-1 rounded-sm border-black mr-[30px] absolute top-[16px] left-[5px] cursor-pointer  lg:-top-[100px] cursor-pointer' onClick={()=>{setOpen(true) , setcloseSidebar(false)}}/>
    <div className={`sidebar fixed top-0 bottom-0  z-10 gap-4 bg-black text-white flex flex-col pb-[40px] lg:col-span-1 ${closesidebar==true? '-left-500':(open==true? 'left-0':'-left-500')} lg:left-0`}>
          <div className='absolute top-[18px] md:left-[8px] lg:-left-[100px] '>
             <IoMdArrowBack onClick={()=>{setcloseSidebar(true) , setOpen(false)} } /> 
          </div>
          <div className='flex-3 flex flex-col ml-[30px] mt-[10px]  '>
            <h1 className='pr-[20px] text-2xl font-semibold uppercase mb-[20px] '>Dash<span className='text-red-700'>board</span></h1>
            <ul  className='flex-3 flex flex-col gap-6 text-start'>
             <NavLink to='/addmenu'> <li>
                Home
              </li></NavLink>
              <NavLink to='/breakfast'>
              <li>
                Breakfast
              </li>
              </NavLink>
              <NavLink to='/lunch'>
              <li>
                Lunch & Dinner
              </li>
              </NavLink>
               <NavLink to='/drinks'>
              <li>
                Drinks
              </li>
              </NavLink>

               <NavLink to='/footer'>
              <li>
                Info
              </li>
              </NavLink>
            </ul>
          </div>
          <div className='text-end mr-[20px] '>

          <button onClick ={handleLogout} className='bg-red-700 border-0 outline-0 w-[100px] px-[10px] py-[5px] rounded-md cursor-pointer'>Logout</button>
          </div>


      </div>
    </>
  )
}

export default Sidebar