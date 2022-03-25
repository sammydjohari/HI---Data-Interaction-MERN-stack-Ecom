import React from 'react';
import { useEffect, useState } from 'react';
import Banderoll from './components/banderoll/Banderoll';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import * as config from "./config";

function App() {
  const [jewels, setJewels] = useState([]);
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/jewels`, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setJewels(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Banderoll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home jewels={jewels} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
