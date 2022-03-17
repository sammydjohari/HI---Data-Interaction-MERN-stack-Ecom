import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banderoll from './components/banderoll/Banderoll';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className='container'>
    <Banderoll />
    <Navbar />
    <Banner />
    </div>
  )
}

export default App;
