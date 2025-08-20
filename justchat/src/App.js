
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chats from './pages/Chats'
import UserLoginResister from './components/authController/UserLogin'

const App = () => {
  return (
    <>
    <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/user_login' element={<UserLoginResister/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App
