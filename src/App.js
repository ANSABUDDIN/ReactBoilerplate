import React from 'react'
import './App.css'
import Home from './Componets/Home'
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './Componets/About';
import Error from './Componets/Error';
import MainC from './Componets/MainC';
import Contact from './Componets/Contact';

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<MainC />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>



    </>

  )
}

export default App
