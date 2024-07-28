import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[20%] h-screen border-[1.5px] border-[#a9a9a9]'>
      <div className='w-[100%] flex flex-col pl-[26%] gap-5 py-2 px-3 mt-8'>
        <NavLink to={"/add"} className='w-[80%] flex flex-row items-center justify-center cursor-pointer gap-3 p-1 border-[1px] border-[#a9a9a9] active:border-[#FF6347] active:bg-[#fff0ed]'>
            <img src={assets.add_icon} alt="add-icon" className='w-5 h-5'/>
            <p>Add Items</p>
        </NavLink>
        <NavLink to={"/list"} className='w-[80%] flex items-center justify-center cursor-pointer gap-3 p-1 border-[1px] border-[#a9a9a9] active:border-[#FF6347] active:bg-[#fff0ed]'>
            <img src={assets.order_icon} alt="List-icon" className='w-5 h-5'/>
            <p>List Items</p>
        </NavLink>
        <NavLink to={"/orders"} className='w-[80%] flex items-center justify-center cursor-pointer gap-3 p-1 border-[1px] border-[#a9a9a9] active:border-[#FF6347] active:bg-[#fff0ed]'>
            <img src={assets.order_icon} alt="order-icon" className='w-5 h-5'/>
            <p>Orders</p>
        </NavLink>
      </div>  
    </div>
  )
}

export default Sidebar
