import React from 'react'
import "./global.scss"
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Profile from "./pages/profile/Profile"
import Message from "./pages/message/Message"

import { Routes, Route } from "react-router-dom"
import Start from './pages/start/Start';
import Notification from './components/notification/Notification';
import NotFound from './pages/notfound/NotFound';
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/notifications/:id' element={<Notification />} />


        <Route path='/register' element={<Register />} />

        <Route path='/login' element={<Login />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/message' element={<Message />} />
        <Route path='*' element={<NotFound />} />



      </Routes>
    </div>
  )
}

export default App