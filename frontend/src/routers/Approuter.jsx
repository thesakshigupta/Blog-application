import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Create from '../pages/Create'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'


export default function Approuter() {
  return (
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<App/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
       </Routes>
      </BrowserRouter>
  )
}


