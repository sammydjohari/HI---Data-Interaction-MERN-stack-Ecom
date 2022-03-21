import React from 'react';
import Banderoll from './components/banderoll/Banderoll';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Banderoll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
