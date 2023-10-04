import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import java from '../assets/java.png';
import graphql from '../assets/GraphQL.png'

const position = `Bachelor of Technology`
const company  = `Kwantlen Polytechnic University`
const dates = `Oct 2015 - Oct 2021`

const skills_data = [
    {
        name: "REACT",
        img: ReactImg
    },
    {
        name: "NODE JS",
        img: Node
    },
    {
        name: "MONGO DB",
        img: Mongo
    },
    {
        name: "JavaScript",
        img: JavaScript
    },
    {
        name: "HTML",
        img: HTML
    },
    {
        name: "CSS",
        img: CSS
    },
    {
        name: "GraphQL",
        img: graphql
    },
    {
        name: "Java",
        img: java
    },
]

const Skills = () => {

  return (
    <div name='skills' className='w-full bg-black flex flex-col justify-center items-center text-white py-8'>
      {/* Container */}
      <div className='max-w-[1000px] bg-black mx-auto p-4 w-full h-full flex skills_experience_container'>      
        

        <SkillIcons skills_data={skills_data}/>

        <div name='education' className=' flex flex-col gap-10 items-center skills_experience'>                     
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '> Education</p>
            <span className="font-bold text-2xl">{position}</span>
            <div class="flex flex-col justify-center items-center">
                <p class="position">{company}</p>
                <p class="position">{dates}</p>
            </div>
            <div class="flex flex-col items-center">
                <div class="flex flex-wrap justify-center">
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
            {skills_data.map((skill)=><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>          
                <img className='w-20 mx-auto' src={skill.img} alt="HTML icon" />
                <p className='my-4'>{skill.name}</p>
            </div>)}
        </div>
    </div>)
}

export default Skills;
