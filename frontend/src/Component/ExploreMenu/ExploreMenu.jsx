import React from 'react';
import "./ExploreMenu.css";
import { menu_list } from '../../Assests/frontend_assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='overflow-x-scroll overflow-auto custom-scrollbar'>
      <h1 className='text-2xl font-bold text-[#262626]'>Explore our menu</h1>
      <p className='w-[60%] mt-4 mb-8'>Choose from a delectable array of dishes crafted with the finest ingredients and culinary expertise.
        Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className='flex gap-10 mb-2 items-center overflow-x-scroll text-center custom-scrollbar'>
            {menu_list.map((item,id)=>{
                return(
                    <div key={id} className='' onClick={()=>setCategory(prev=> prev === item.menu_name?"All":item.menu_name)}>
                        <img src={item.menu_image} alt="menu" className={`${category ===item.menu_name?'p-[1px] border-4 rounded-full border-[#0bffff]':""} cursor-pointer`}/>
                        <p className={`cursor-pointer mt-2 text-[#747474] ${category ===item.menu_name?'border-b-2 border-[#00ffff]':""}`}>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='h-1 border-none mt-8 mb-[10px] bg-[#e2e2e2]'/>
    </div>
  )
}

export default ExploreMenu;