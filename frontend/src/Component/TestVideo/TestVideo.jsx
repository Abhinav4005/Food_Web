import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const TestVideo = () => {
  const setData = [
    {
      id:1,
      image:"https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      ques:"Behavioural Question",
      ans:"Describe your approch to collabrating with team members on project or tasks",
      secQues:"Al Evaluation",
      out:"64/100"
    },
    {
      id:2,
      image:"https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      ques:"Technical Question: Based on figma",
      ans:"How do you use Figma's component library to maintain consistency in your designs?",
      secQues:"Al Evaluation",
      out:"84/100"
    },
    {
      id:3,
      image:"https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      ques:"Technical Question: Based on Adobe XD",
      ans:"How do you create responsive designs in Adobe XD ? Explain",
      secQues:"Al Evaluation",
      out:"78/100"
    },
    {
      id:4,
      image:"https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      ques:"Technical Question: Based on Photoshop",
      ans:"How do you use photoshop to create visual assets for user interfaces?",
      secQues:"Al Evaluation",
      out:"62/100"
    }
  ]
  return (
    <div className='w-[80%] m-auto flex flex-col'>
      <div className='flex flex-row'>
        <button className='flex flex-row items-center gap-2 mt-3'><FiArrowLeft /> Back</button>
      </div>
      <div className='shadow-lg mt-2 p-3'> 
        <div className='border-[1px] w-[20%] flex flex-row items-center p-2 gap-2 rounded-lg border-black'> 
          <CiSearch />
          <input type="text" placeholder='Search Tests' className='text-sm outline-none'/>
        </div>
        <div>
          {setData.map((item,index)=>{
            return(
              <div key={index} className='flex flex-row justify-between border-[2px] p-6 mt-5 rounded-2xl'>
                <div className='flex flex-row gap-3'>
                  <img src={item.image} alt="card" className='w-20 h-16 rounded'/>
                  <div className='w-[60%] flex flex-col gap-2'>
                    <p className='text-sm'>{item.ques}</p>
                    <p className='text-xs'>{item.ans}</p>
                  </div>
                </div>
                <div>
                  <div className='flex flex-col items-center gap-2'>
                    <p className='text-sm'>{item.secQues}</p>
                    <p className='text-base font-semibold'>{item.out}</p>
                  </div>
                  <div></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TestVideo;