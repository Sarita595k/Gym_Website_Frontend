import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NutritionPlan from './Pages/NutritionPlan'
import Footer from "./Components/Footer/Footer"
import AiWorkoutPlan from './Pages/AiWorkoutPlan'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Register from './Pages/Register'
const App = () => {
  return (
    <div className='bg-emerald-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path="/nutrition" element={<NutritionPlan />}>Nutrition Plan</Route>
        <Route path='aiWorkout' element={<AiWorkoutPlan />}>AiWorkout</Route>
        <Route path='login' element={<Login />}>Login</Route>
        <Route path='dashboard' element={<Dashboard />}>Dashboard</Route>
        <Route path='/register' element={<Register />}>Register</Route>
      </Routes>
      <Footer />
    </div>

  )
}

export default App