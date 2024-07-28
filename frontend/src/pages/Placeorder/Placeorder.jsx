import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Placeorder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form action="" className='w-[80%] m-auto mt-10 mb-5 flex items-start justify-between gap-14'>
      <div className='mb-4 w-[80%]'>
        <p className='text-3xl font-semibold mb-10`'>Delivery Information</p>
        <div className='flex gap-[1%] mt-10'>
          <input type="text" placeholder='First Name' className='w-[35%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
          <input type="text" placeholder='Last Name' className='w-[35%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
        </div>
        <div className='flex flex-col gap-[1%]'>
          <input type="text" placeholder='Email Address' className='w-[71%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
          <input type="text" placeholder='Street' className='w-[71%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
        </div>
        <div className='flex gap-[1%]'>
          <input type="text" placeholder='City' className='w-[35%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
          <input type="text" placeholder='State' className='w-[35%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
        </div>
        <div className='flex gap-[1%]'>
          <input type="text" placeholder='Zip Code' className='w-[35%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
          <input type="text" placeholder='Country' className='w-[35%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
        </div>
        <input type="text" placeholder='Phone' className='w-[71%] p-1 pl-2 mb-4 border-[1px] border-[#c5c5c5] outline-[#ff5733] rounded'/>
      </div>
      <div className='w-[50%]'>
      <div className='w-[100%] flex flex-col gap-5'>
          <h2 className='text-black font-bold text-lg'>Cart Totals</h2>
          <div className='w-[100%]'>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className='mt-3 mb-3'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery fees</p>
              <p>₹{getTotalCartAmount()===0?0:10}</p>
            </div>
            <hr className='mt-3 mb-3'/>
            <div className='flex justify-between text-[#555]'>
              <p className='font-semibold'>Total</p>
              <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+10}</p>
            </div>
          </div>
          <button className='w-[40%] text-white mt-3 pt-2 pb-2 border-none cursor-pointer rounded text-sm bg-[#ff5733] '>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder;