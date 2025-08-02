import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

const Protected = () => {
const isLoggedin = localStorage.getItem('logIn')
  return  isLoggedin=="true"?<Outlet/>:<Navigate to='/'/>
}

export default Protected