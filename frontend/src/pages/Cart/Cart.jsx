import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className='w-[80%] m-auto mt-5 mb-10'>
      <div>
        <div className='grid grid-cols-custom items-center'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div key={index} className='grid grid-cols-custom mt-3 mb-3 items-center text-black'>
                  <img src={item.image} alt="item" className='w-14 rounded'/>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p>
                    <button onClick={() => removeFromCart(item._id)}>x</button>
                  </p>
                </div>
                <hr className='bg-[#e2e2e2]'/>
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className='mt-16 flex justify-between gap-5'>
        <div className='w-[70%] flex-1 flex flex-col gap-5'>
          <h2 className='text-black font-bold text-lg'>Cart Totals</h2>
          <div className='w-[80%]'>
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
          <button className='w-[30%] text-white pt-2 pb-2 border-none cursor-pointer rounded text-sm bg-[#ff5733] '><NavLink to="/order"  >PROCEED TO CHECKOUT</NavLink></button>
        </div> 
        <div className='w-[40%]'>
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here </p>
            <div className='mt-2 flex items-center justify-between bg-[#eaeaea] rounded'>
              <input type="text" placeholder='Enter promo code....' className='bg-transparent outline-none border-none pl-2'/>
              <button className='w-20 pt-2 pb-2 pl-1 pr-1 bg-black border-none text-white rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;