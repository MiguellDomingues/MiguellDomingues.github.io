import React from 'react'
import { useEffect } from 'react'

import { experience_data  } from '../content.js'

const is_mobile = (window.innerWidth || document.documentElement.clientWidth) <= 650;

const Experience = () => {


    useEffect(()=>{
        const items = document.querySelectorAll("#timeline li");
        const isInViewport = el => {
          const rect = el.getBoundingClientRect();
          const result = 
          rect.top >= 0 && 
          rect.left >= 0 && 
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
          rect.right <= (window.innerWidth || document.documentElement.clientWidth);

          /*
          if(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)){
            console.log("box bottom", rect.bottom, "<= client height", document.documentElement.clientHeight)
            console.log(rect)
          }
          */

          return result
        };

        const run = () => {

          items.forEach(item => {
            if (isInViewport(item) || is_mobile) {
              item.classList.add("show");
            }else{
              item.classList.remove("show");
            }

        })};
         
        // Events
        window.addEventListener("load", run);
        window.addEventListener("resize", run);
        window.addEventListener("scroll", run);
    },[])

    const getHeaderCSS = (is_mobile) =>{
      const css = ['pb-8','width-full' ,'flex']
      if(is_mobile){
        css.push('justify-center')
      }

      return css.join(' ')
    }

  return (
    <div name='experience' className='w-full md:auto bg-black text-white py-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
        <div className={getHeaderCSS(is_mobile)}>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Experience
          </p>
        </div>

        { !is_mobile ?
          <section id="timeline" className='p-0'>
            <ul className='p-0'>
              {experience_data.map((data, idx)=><ExperienceItem key={idx} experience_data={data}/>)}
            </ul>
          </section> 
          : <div>
            <ul className='p-0 text-lg '>
              {experience_data.map((data, idx)=><ExperienceItem key={idx} experience_data={data}/>)}
            </ul>
          </div>
        }
      </div>
  </div>)
}

export default Experience

const ExperienceItem = ({experience_data: {position, company, dates, duties}}) => {

  const getSectionCSS = (is_mobile) =>{
    let css = ['card']

    if(is_mobile){
      css = css.concat([ 'bg-white', 'text-black', 'rounded-3xl', 'p-2', 'mb-3', 'mobile_experience_card'])
    }

    return css.join(' ')
  }
// bg-white text-black rounded-3xl p-2 mb-2 mobile_experience_card
  return(
    <li>
      <div className={getSectionCSS(is_mobile)}>      
          <div className="experience_header">
            <span className="font-bold text-2xl">{position}</span>
            <div className="position">{company}</div>
            <div className="position">{dates}</div>
          </div>
          {duties.map((duty, idx)=><p className="info" key={idx}><span className="checkmark">✔</span>{duty}</p>)}
        </div>
      </li>)
}


