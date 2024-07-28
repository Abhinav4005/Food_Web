import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const List = () => {
  const [listItem, setListItem] = useState([]);

  const url ="http://localhost:8000";
  console.log("List item",listItem);

  const fetchList =async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if(response.data){
      setListItem(response.data);
    }
    else{
      toast.error("Error in getting list item");
    }
  }

  let removeFood =async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    console.log(foodId)
  }

  useEffect(()=>{
    fetchList();
  },[])

  const items = Object.values(listItem);
  console.log("Items -> ",items);
  return (
    <div className='w-[70%] flex flex-col gap-2 mt-10 ml-10'>
     <p>All Foods list</p>
     <div className='w-[100%]'>
      <div className='grid grid-cols-custom items-center py-3 px-4 text-xs border-[1px] border-[#cacaca] bg-[#f9f9f9] '>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {items.map((item)=>{
        return(
        item.map((data,index)=>{
          return(
            <div key={index} className='grid grid-cols-custom items-center py-3 px-4 text-xs border-[1px] border-[#cacaca]'>
              <img src={`${url}/images/`+data.image} alt="food" className='w-[50px]'/>
              <p>{data.name}</p>
              <p>{data.category}</p>
              <p>{data.price}</p>
              <p className='cursor-pointer' onClick={()=> removeFood(data._id)}>x</p>
            </div>
          )
        }))
      })}
    </div> 
    </div>
  )
}

export default List;