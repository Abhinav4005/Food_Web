import React, { useState } from 'react'
import { assets } from '../../Assests/frontend_assets/assets';
import axios from "axios";
import toast from 'react-hot-toast';

const Login = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");
    const [formData, setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    // console.log("formData -> ",formData)
    const handleSubmit =async(e) =>{
        e.preventDefault();
        if(currState==="Sign Up"){
            const response = await axios.post("http://localhost:8000/api/user/register", formData);
            if(response){
                setFormData({
                    fullName:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                })
                toast.success("Sign up successfull");
                setShowLogin(false);
            }
        } else{
            const response = await axios.post("http://localhost:8000/api/user/login", formData);
            console.log(response);
            if(response){
                setFormData({
                    email:"",
                    password:"",
                })
                toast.success("Login successfull");
                setShowLogin(false);
            }
        }
    }
  return (
    <div className='w-[100%] h-[100%] absolute grid bg-[#00000090]'>
        <form className='place-self-center w-[400px] rounded text-[#808080] bg-white flex flex-col gap-5 pt-6 pb-6 pl-7 pr-7 animate-fadeIn text-sm z-10' onSubmit={handleSubmit}>
            <div className='flex justify-between items-center text-black'>
                <h2 className='text-4xl'>{currState}</h2>
                <img src={assets.cross_icon} alt="cross" onClick={()=>setShowLogin(false)} className='w-3 h-3 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-5'>
                {currState ==="Login"?<></>:
                <>
                <input type="text" placeholder='Your Name' name="fullName" value={formData.fullName} onChange={handleChange} className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded'/>
                <input type="password" placeholder='confirmPassword' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded'/>
                </>
                }
                <input type="text" placeholder='Your email' name="email" value={formData.email} onChange={handleChange} className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded'/>
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} className='outline-none border-[1px] border-[#c9c9c9] p-[5px] rounded'/>
            </div>
            <button className='border-none p-2 rounded bg-[#ff5733] text-base text-white'>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='flex items-start gap-2 mt-[-8px]'>
                <input type="checkbox" className='mt-1'/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currState ==="Login"?<p>Create a account <span onClick={()=> setCurrState("Sign Up")} className='text-[#ff5733] cursor-pointer'>Click here</span></p>
            :<p>Already have account <span onClick={()=> setCurrState("Login")} className='text-[#ff5733] cursor-pointer'>Login here</span></p>}
        </form>
    </div>
  )
}

export default Login;