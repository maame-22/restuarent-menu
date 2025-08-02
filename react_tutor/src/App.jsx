import React from 'react'
import RootLayout  from './rootlayout/rootLayout.jsx'
import Notfound  from './rootlayout/Notfound.jsx'
import Home from './components/dashboard/Home.jsx'
import {Routes , Route} from 'react-router-dom'
import Addmenu  from './components/dashboard/Addmenu.jsx'
import Breakfast from './components/dashboard/Breakfast.jsx'
import Lunch from './components/dashboard/Lunch.jsx'
import Drinks from './components/dashboard/Drinks.jsx'
import Protected from './protected.jsx';
import Edit from './components/dashboard/EditDrink.jsx'
import EditDrinks from './components/dashboard/EditDrink.jsx'
import EditFood from './components/dashboard/editFood.jsx'
import Footer from './components/dashboard/info.jsx'

const App = () => {

if(!localStorage.getItem('logIn')){
   localStorage.setItem("logIn" , false)
}

const isLoggedin = localStorage.getItem('logIn')

  return (
    <>
     <Routes>
       {/* is not logged in */}
         {
          isLoggedin=="false" &&(
            <>
              <Route path='/' element ={<RootLayout/>}/>
              
            </>
          )

         }
        {/* is Logged in */}
        <Route element={<Protected/>}>
           <Route path='/addmenu' element ={<Addmenu/>}/> 
           <Route  path='/breakfast' element ={<Breakfast/>}  /> 
           <Route path='/editFood/:id' element={<EditDrinks/>}/>
           <Route path='/editDrinks/:id' element={<EditFood/>}/>
           <Route  path='/lunch' element ={<Lunch/>}  /> 
           <Route  path='/drinks' element ={<Drinks/>}  /> 
           <Route  path='/footer' element ={<Footer/>}  /> 
           <Route  path='/footer/:id' element ={<Footer/>}  /> 
        </Route> 
        
        <Route path='*' element ={<Notfound/>}/> 
    
        {/* isloggedin */}

       
        
     </Routes>
  
    
    </>
    
  )
}

export default App