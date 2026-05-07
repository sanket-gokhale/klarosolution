import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes, Navigate } from 'react-router-dom'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'
import Add from './Pages/Add/Add'
import Login from './Pages/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = window.location.hostname === "localhost" ? "http://localhost:4000" : "https://klarosolution.onrender.com"

  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div>
      <ToastContainer/>

      <Routes>
        {/* 🔐 Login Route */}
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />

        {/* 🔒 Protected Admin Routes */}
        <Route
          path="/*"
          element={
            isAdmin ? (
              <>
                <Navbar/>
                <hr/>
                <div className="app-content">
                  <Sidebar/>
                  <Routes>
                    <Route path='/add' element={<Add url={url}/>} />
                    <Route path='/list' element={<List url={url}/>} />
                    <Route path='/orders' element={<Orders url={url}/>} />
                  </Routes>
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App