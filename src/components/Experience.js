import React from 'react'
import { useEffect } from 'react'

import { experience_data  } from '../content.js'

const Experience = () => {

    useEffect(()=>{
        const items = document.querySelectorAll("#timeline li");
        const isInViewport = el => {
          const rect = el.getBoundingClientRect();
          const result = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
          return result
        };
        const run = () =>
          items.forEach(item => {
            if (isInViewport(item)) {
              item.classList.add("show");
            }
          });
        // Events
        window.addEventListener("load", run);
        window.addEventListener("resize", run);
        window.addEventListener("scroll", run);
    },[])

  return (
    <div name='experience' className='w-full md:auto bg-black text-white py-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
        <div className='pb-8  width-full flex '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Experience
          </p>
        </div>

        <section id="timeline" className='p-0'>
          <ul className='p-0'>
            {experience_data.map((data, idx)=><ExperienceItem key={idx} experience_data={data}/>)}
          </ul>
        </section>
      </div>
  </div>)
}

export default Experience

const ExperienceItem = ({experience_data: {position, company, dates, duties}}) => {

  return(
    <li>
      <div className="card">      
          <div className="experience_header">
            <span className="font-bold text-2xl">{position}</span>
            <p className="position">{company}</p>
            <p className="position">{dates}</p>
          </div>
          {duties.map((duty, idx)=><p className="info" key={idx}><span className="checkmark">✔</span>{duty}</p>)}
        </div>
      </li>)
}


