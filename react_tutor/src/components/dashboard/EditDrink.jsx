import React , {useState} from 'react'
import { useEffect } from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'

const EditDrinks = () => {

const navigate = useNavigate()
const {id} = useParams()
 useEffect(()=>{
    axios.get(`http://localhost:3000/food/`+id)
   .then(res=>{
    setValues({...values , name:res.data[0].name , price:res.data[0].price , category:res.data[0].category ,
       img:res.data[0].img , ingra : res.data[0].ingra})
   }
  ).catch(err=>console.log(err))
    }, [])
  
    const [values , setValues]= useState({
      id:id ,
      name:'',
      price :'',
      category:'',
      img: '',
      ingra:''

    })

    const handleFile = (e)=>{
    const file =e.target.files[0]
    if(!file){
     setValues({...values , img:values.img})
    }
    setValues({...values , img:file})

    }
    
   
    const handleUpdate =(e)=>{
      e.preventDefault();
      
      axios.put('http://localhost:3000/update/'+id, values)
      .then(res=>{
        console.log(res)
        navigate(`/${values.category}`)
    }).catch(err=>console.log(err))

    }
  return (
    <div className='w-[90%] translate-y-1/10 rounded-2xl md:w-[40%] md:translate-y-1/5  min-h-[70vh] mx-auto bg-gray-200'>
        <h1 className='text-2xl md:text-3xl pt-[30px] ml-[20px] font-semibold'>Update Food</h1>
         <form  className='w-[95%] ml-[10px] mt-[20px] '  onSubmit={handleUpdate}>
                <div className='w-full mb-[10px]'>
                  <input onChange={(e)=>setValues({...values , name:e.target.value})}  className='w-full outline-0  border-1 border-gray-400 rounded-md py-[5px]' type="text"  placeholder='Name' value={values.name}/>
                </div>
                <div className='w-full mb-[10px]'>
                  <input onChange={(e)=>setValues({...values , price:e.target.value})}  className='w-full outline-0  border-1 border-gray-400 rounded-md py-[5px]' type="number"  placeholder='Price' value={values.price}/>
                </div>
                <div className='w-full mb-[10px]'>
                  <input  onChange={(e)=>setValues({...values , ingra:e.target.value})} value={values.ingra} className='w-full outline-0  border-1 border-gray-400 rounded-md py-[5px]' type="text"  placeholder='Ingredients'/>
                </div>
                <div className='w-full mb-[10px]'>
                 <select value={values.category} onChange={(e)=>setValues({...values ,category:e.target.value})} className='w-full outline-0 border-1  border-gray-400 rounded-md py-[5px]'>
                  <option >Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                </select>
                </div>
                <div>
                 <input onChange={handleFile} className='w-full outline-0 border-1 border-gray-400 rounded-md py-[5px]' type="file" disabled />
                 <p>{values.img}</p>
                </div>
                <div className='text-end'>
                  <button className='cursor-pointer w-[100px] py-[5px] rounded-md bg-blue-700 border-0 outline-0 text-white mt-[10px]'>Edit</button>
                </div>
               


              </form>
    </div>
  )
}

export default EditDrinks