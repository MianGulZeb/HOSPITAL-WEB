import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navber from './components/Navber';
import Home  from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blogs from './components/Blogs';

function App() {
  return (
    
    <Router>
    <div>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path='/about' element= {<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blogs' element={<Blogs/>} />
      </Routes>
    </div>
  </Router>
    
  )
}
export default App;
