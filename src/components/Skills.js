import React from 'react';
import { skills_data } from '../content.js'

const Skills = () => {

  return (
    <div name='skills' className='w-full bg-black flex flex-col justify-center items-center text-white py-8'>
      <div className='max-w-[1000px] bg-black mx-auto p-4 w-full h-full flex skills_experience_container'>      
        <SkillIcons skills_data={skills_data}/>
      </div>
    </div>
  );
};


const SkillIcons = ({skills_data}) =>{
    return(
    <div className=' flex flex-col items-center'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
        <div className=' bg-black grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 skill_icons'>
            {skills_data.map((skill, idx)=>
                <div key={idx} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center'>           
                  <div className='skill_img_container'>
                    <img className='skill_img_dimensions' src={skill.img} alt="HTML icon" />
                  </div>  
                  {<p className=''>{skill.name}</p>}            
                </div>)}
          </div>
    </div>)
}

export default Skills;

