import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

import PlaceService from './pages/PlaceService/PlaceService'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders'
import Terms from './pages/Terms'



const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>

        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceService />} />

          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App