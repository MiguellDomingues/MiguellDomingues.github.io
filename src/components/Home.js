import React from 'react'
import { useState,useEffect } from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';


export const Home = () => {
  const values=["I'm a Full Stack Developer","I'm a Full Stack Developer","I'm a Full Stack Developer","I'm a Full Stack Developer", "I'm a Full Stack Developer"];
  const[value,setValue]=useState(values[0]);
  useEffect(()=>{
    let item=0;

    const changeValue=()=>{
      if(item===4){
        item=0;
        setValue(values[item])
      }else{
        item=item+1;
        setValue(values[item])
      }
    }
    setInterval(changeValue,8000);
    return 
  },[])
  return (
    <div name='home' className='w-full h-screen  bg-gradient-to-r from-yellow-400 to-orange-600' >
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='font-bold text-pink-600 '>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Miguel</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-red typeWriter'>{value}</h2>
            
            <p className=' text-black py-4 max-w-[700px]'>
            I'm a software developer with 1 year of professional experience. Passionate in all things technology, willing to push my boundaries and tackle new problems. 
            Always on the lookout for knowledge and new opportunities to hone my skills and broaden my skillset.
            </p>

            <p className=' text-black py-4 max-w-[700px]'>
            
            </p>

            <div>
            
            
           
            <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                </span>
              
            </button>
            </Link>
           
           
        </div>
      </div>
    </div>
    
  )
}
