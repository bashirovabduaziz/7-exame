import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/ContactUs/Contact'
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/wishlist' element={<Wishlist />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/admin' element={<Admin />}/>
    </Routes>
    </>
  )
}

export default App