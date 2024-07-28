import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='mt-[20px]'>
      <h2 className='text-2xl font-bold text-[#262626]'>Top dishes near you</h2>
      <div className='grid grid-cols-4 mt-5 mb-5 gap-y-8 gap-6'>
        {food_list.map((item,index)=>{
            if(category ==="All" || category === item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay;