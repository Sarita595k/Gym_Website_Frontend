import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div><Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
      </Routes></div>
  )
}

export default App