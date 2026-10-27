import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Create from '../pages/Create'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'


export default function Approuter() {
  return (
       <Routes>
         <Route path='/' element={<Navigate to ="/Signup" replace />} />

         <Route path='/Signup' element={<Register/>}/>
         <Route path='/Signin' element={<Login/>}/>
         
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Create' element={<Create/>}/>
       </Routes>
  )
}


