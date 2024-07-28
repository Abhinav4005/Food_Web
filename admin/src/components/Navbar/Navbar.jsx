import React from 'react';
import {assets} from "../../assets/admin_assets/assets"

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center py-2 px-16'>
      <img src={assets.logo} alt="logo" className='w-[max(10%,80px)]'/>
      <img src={assets.profile_image} alt="profile-logo" className='w-[40px]'/>
    </div>
  )
}

export default Navbar;