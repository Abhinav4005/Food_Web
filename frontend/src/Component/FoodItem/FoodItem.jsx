import React, { useContext } from 'react'
import { assets } from '../../Assests/frontend_assets/assets';
import "./FoodItem.css";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name, description, price, image}) => {
    const {cartItem, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className='w-[100%] m-auto rounded-2xl shadow-sm animate-fadeIn transition duration-300'>
      <div className='relative'>
        <img src={image} alt="food" className='w-[100%] custom-img'/>
        {!cartItem[id]?
            <img src={assets.add_icon_white} alt='add' onClick={()=>addToCart(id)} className='absolute top-40 left-56'/>
            :<div className='flex gap-5 items-center absolute top-40 left-32 bg-white rounded-full p-2'>
                <img src={assets.remove_icon_red} alt="remove" onClick={()=>removeFromCart(id)}/>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} alt="add" onClick={()=>addToCart(id)}/>
            </div>}
      </div>
      <div className='p-3'>
        <div className='flex justify-between items-center mb-2'>
            <p className='text-xl font-medium'>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='text-[#676767] text-xs'>{description}</p>
        <p className='text-xl text-[#ff6347] font-medium mt-[10px] mb-[10px]'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem;