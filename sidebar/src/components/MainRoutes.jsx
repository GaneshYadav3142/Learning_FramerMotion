import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Analytics from '../pages/Analytics'
import Cart from '../pages/Cart'
import Messages from '../pages/Messages'
import FileManager from '../pages/FileManager'
import Saved from '../pages/Saved'
import Settings from '../pages/Settings'
import Users from '../pages/Users'

const MainRoutes = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/messages' element={<Messages/>}/>
    <Route path='/filemanager' element={<FileManager/>}/>
    <Route path='/saved' element={<Saved/>}/>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/users' element={<Users/>}/>
  </Routes>
    </>
  )
}

export default MainRoutes