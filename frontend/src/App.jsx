import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Placeorder from './pages/Placeorder/Placeorder';
import Cart from './pages/Cart/Cart';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import {Toaster} from "react-hot-toast";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    <Toaster/>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className=''>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App;
