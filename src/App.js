import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navber from './components/Navber';
import Home  from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Button from './layouts/Button';


function App() {
  return (
    
    // cinnebt
    <Router>
    <div>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path='/about' element= {<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/button' element={<Button/>} />
      </Routes>
    </div>
  </Router>
    
  )
}
export default App;
