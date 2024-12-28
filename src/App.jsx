import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/HomePage'; 
import ContactUS from './Pages/ContactPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUS />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
