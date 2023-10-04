import React from 'react';


import { skills_data } from '../content.js'

const position = `Bachelor of Technology`
const company  = `Kwantlen Polytechnic University`
const dates = `Oct 2015 - Oct 2021`

const Skills = () => {

  return (
    <div name='skills' className='w-full bg-black flex flex-col justify-center items-center text-white py-8'>
      {/* Container */}
      <div className='max-w-[1000px] bg-black mx-auto p-4 w-full h-full flex skills_experience_container'>      
        

        <SkillIcons skills_data={skills_data}/>

        <div name='education' className=' flex flex-col gap-10 items-center skills_experience'>                     
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '> Education</p>
            <span className="font-bold text-2xl">{position}</span>
            <div className="flex flex-col justify-center items-center">
                <p className="position">{company}</p>
                <p className="position">{dates}</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center">
                    <p>Major: Information Technology &#160;</p>
                    <p><i>(With Distinction)</i></p>               
                </div>
                <p>3.77 GPA</p>
            </div>
        </div>                   
      </div>
    </div>
  );
};


const SkillIcons = ({skills_data}) =>{
    return(
    <div className='skills_experience flex flex-col items-center'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
        <div className=' bg-black grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 skill_icons'>
            {skills_data.map((skill, idx)=>
                <div key={idx} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>          
                    <img className='w-20 mx-auto' src={skill.img} alt="HTML icon" />
                    <p className='my-4'>{skill.name}</p>
                </div>)}
        </div>
    </div>)
}

export default Skills;
