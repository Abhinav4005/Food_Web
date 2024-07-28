import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from './components/Sidebar/Sidebar';
import {Routes, Route} from "react-router-dom";
import Add from './pages/Add/Add';
import List from "./pages/List/List";
import Orders from './pages/Orders/Orders';

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr className='border-none h-[1px] bg-[#a9a9a9]'/>
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
      <Toaster/> 
    </div>
  )
}

export default App;