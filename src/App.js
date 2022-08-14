import React from 'react'
import './App.css'
import Home from './Componets/Home'
import {
  
  Routes,
  Route,
} from "react-router-dom";
import About from './Componets/About';
import Error from './Componets/Error';

const App = () => {
  return (
    <>
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
     
    </Routes>
    
   
    
    </>
    
  )
}

export default App
