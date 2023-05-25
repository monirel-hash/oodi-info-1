import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Company from './pages/Company';
import References from './pages/References';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/societe" element={<Company />} />
          <Route path="/references" element={<References />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
