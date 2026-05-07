import React, { useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const Cart = lazy(() => import('./pages/Cart/Cart'))
const PlaceService = lazy(() => import('./pages/PlaceService/PlaceService'))
const MyOrders = lazy(() => import('./pages/MyOrders/MyOrders'))
const Terms = lazy(() => import('./pages/Terms'))

const LoadingSpinner = () => (
  <div className="loading-spinner-container">
    <div className="loading-spinner"></div>
  </div>
)



const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>

        <Navbar setShowLogin={setShowLogin} />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceService />} />

            <Route path='/myorders' element={<MyOrders />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default App