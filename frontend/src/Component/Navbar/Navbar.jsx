import React, { useContext, useState } from 'react';
import { assets } from "../../Assests/frontend_assets/assets";
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [activeMenu, setActiveMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        document.getElementById(menu.replace(' ', '-')).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='flex justify-around items-center shadow-md p-2'>
            <div>
                <NavLink to="/">
                    <img src={assets.logo} alt="logo" />
                </NavLink>
            </div>
            <div>
                <ul className='flex flex-row gap-4'>
                    {['home', 'menu',  'contact us'].map((menu) => (
                        <li 
                            key={menu} 
                            className={`cursor-pointer ${activeMenu === menu ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleMenuClick(menu)}
                        >
                            <NavLink to={`#${menu.replace(' ', '-')}`}>{menu}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <img src={assets.search_icon} alt="search-icon" />
                <NavLink to="/cart">
                    <img src={assets.basket_icon} alt="basket-icon" className='z-40'/>
                    {getTotalCartAmount()===0?"":
                    <span class="absolute flex w-3 h-3 top-2 left-[81%] z-[-10]">
                        <span class="animate-ping absolute inline-flex w-full h-full z-10 rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full w-3 h-3 z-10 bg-red-500"></span>
                    </span>}
                </NavLink>
                <button 
                className='bg-transparent text-base text-[#495573] pt-[10px] pb-[10px] pr-[20px] pl-[20px] border-2 rounded-3xl transition duration-75 hover:bg-[#fff4ff]' 
                onClick={()=> setShowLogin(true)}>
                    sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;