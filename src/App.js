import React from 'react'
import "./global.scss"
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Profile from "./pages/profile/Profile"
import Message from "./pages/message/Message"

import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/message' element={<Message />} />


      </Routes>
    </div>
  )
}

export default App