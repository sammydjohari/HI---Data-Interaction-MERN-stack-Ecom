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
import Checkout from './pages/Checkout';
import Staff from './pages/Staff';

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

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  function onCart(jewels) {

  }

  function onBuy(jewels) {

  } 

  function onCheckout(jewels) {

  }

  return (
    <Router>
      <div className='App'>
        <Banderoll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop jewels={jewels} cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
