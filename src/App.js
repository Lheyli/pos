import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import About from './pages/About';




const App = () => {
  return (

    
    <Router>
 
 
      <Routes>
      <Route path="/" element={<Product/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
   
    </Router>
 
  );
}

export default App;
