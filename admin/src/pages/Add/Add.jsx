import React, { useState } from 'react'
import { assets } from '../../assets/admin_assets/assets';
import axios from "axios";
import toast from 'react-hot-toast';

const Add = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        descritpion:"",
        category:"",
        price:"",
    })

    const handleChange=(event)=>{
        const name =event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}));
    }

    const url ="http://localhost:8000";

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.descritpion);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`, formData);
        if(response){
            setData({
                name:"",
                descritpion:"",
                price:"",
                category:"",
            })
            setImage(false);
            toast.success("Food item added successfully");
        } else{
            console.log("Error in adding food");
            toast.error("Error in adding food")
        }
    }
  return (
    <div className='w-[70%] ml-custom-ml mt-8 text-base text-[#6d6d6d]'>
      <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="upload-area" className='w-[120px] cursor-pointer'/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image" hidden required />
        </div>
        <div className='w-[40%] flex flex-col gap-2 text-base'>
            <p>Product Name</p>
            <input onChange={handleChange} value={data.name} type="text" name="name" placeholder='Type here....' className='p-2 outline-none border-[1px] border-[#a9a9a9] rounded-sm'/>
        </div>
        <div className='w-[40%] flex flex-col gap-2 test-base'>
            <p>Product Description</p>
            <textarea onChange={handleChange} value={data.descritpion} name="descritpion" rows="4" content='Write Content here....' required className='p-2 outline-none border-[1px] border-[#a9a9a9] rounded-sm'></textarea>
        </div>
        <div className='flex gap-7'>
            <div className='flex flex-col gap-2'>
                <p>Product Category</p>
                <select name="category" onChange={handleChange} value={data.category} className='w-[120px] outline-none border-[1px] p-2 border-[#a9a9a9] rounded-sm'>
                    <option value="Select">Select</option>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Deserts">Desserts</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Product Price</p>
                <input type="text" onChange={handleChange} value={data.price} name='price' placeholder='Enter price....' className='w-[120px] outline-none border-[1px] p-2 border-[#a9a9a9] rounded-sm'/>
            </div>
        </div>
        <button type='submit' className='w-[120px] bg-black text-white p-2 border-none cursor-pointer'>Add</button>
      </form>
    </div>
  )
}

export default Add;