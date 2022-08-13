import React from 'react'
import './App.css'
import Home from './Componets/Home'
import {
  
  Routes,
  Route,
} from "react-router-dom";
import About from './Componets/About';

const App = () => {
  return (
    <>
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
    
   
    
    </>
    
  )
}

export default App
