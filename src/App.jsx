import React from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

