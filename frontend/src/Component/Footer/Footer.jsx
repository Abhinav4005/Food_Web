import React from 'react'
import { assets } from '../../Assests/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='w-[100%] text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 mt-2 p-5 pt-16 m-auto'>
      <div className='w-[80%] grid grid-cols-3 gap-20'>
        <div className="flex flex-col items-start gap-5">
            <img src={assets.logo} alt="logo" className='w-[40%]' />
            <p> wdeee wecbifhrf vvbrev lrvjr vf r;jr vrvjk erov orfje fvm,nre</p>
            <div className='flex flex-row gap-2'>
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedIn" />
            </div>
        </div>
        <div className="flex flex-col items-start gap-5">
            <h2 className='text-2xl font-bold text-[#ffffff]'>Company</h2>
            <ul className='flex flex-col gap-2'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About us</li>
                <li className='cursor-pointer'>Delivery</li>
                <li className='cursor-pointer'>Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
            <h2 className='text-2xl font-bold text-[#ffff]'>GET IN TOUCH</h2>
            <ul className='flex flex-col gap-2'>
                <li className='cursor-pointer'>+1-865-984-2633</li>
                <li className='cursor-pointer'>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-[80%] h-[2px] mt-4 mb-4 bg-gray-200 '/>
      <p>Copyright 2024 &copy; Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer;