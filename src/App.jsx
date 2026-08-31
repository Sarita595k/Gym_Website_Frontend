import React from 'react'
import Navbar from './Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NutritionPlan from './Pages/NutritionPlan'
import Footer from "./Components/Footer/Footer"
import AiWorkoutPlan from './Pages/AiWorkoutPlan'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path="/nutrition" element={<NutritionPlan />}>Nutrition Plan</Route>
        <Route path='aiWorkout' element={<AiWorkoutPlan />}>AiWorkout</Route>
      </Routes>
      <Footer />
    </div>

  )
}

export default App