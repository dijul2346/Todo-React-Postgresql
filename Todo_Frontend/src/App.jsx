import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Dishboard from './components/Dishboard';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dishboard" element={<Dishboard/>}/>
      </Routes>
    </BrowserRouter>
    
      
  )
}

export default App
