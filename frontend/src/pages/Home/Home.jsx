import React, { useState } from 'react'
import Header from '../../Component/Header/Header';
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='w-[80%] m-auto'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home;