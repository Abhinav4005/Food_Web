import React from 'react';
import { assets } from '../../Assests/frontend_assets/assets';

const Header = () => {
  return (
    <div 
      className="h-[500px] flex items-center justify-center mt-[30px] mb-[30px] bg-cover bg-center rounded-xl" 
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className="w-[80%] text-center text-white p-4 bg-black bg-opacity-50 rounded-lg animate-fadeIn">
        <h2 className="text-4xl font-bold mb-4">Order your favourite food from here</h2>
        <p className="mb-6">
          Choose from a delectable array of dishes crafted with the finest ingredients and culinary expertise.
          Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">View Menu</button>
      </div>
    </div>
  );
};

export default Header;