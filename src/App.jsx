import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/ContactUs/Contact'
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import Header from './components/Header/Header'
import Single from './pages/Single/Single'

const App = () => {
  return (
    <>
    <div className='container'>
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/single-product/:id' element={<Single />} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/wishlist' element={<Wishlist />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/admin' element={<Admin />}/>
    </Routes>
    </div>
    </>
  )
}

export default App