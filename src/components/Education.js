import React from 'react';

const position = `Bachelor of Technology`
const company  = `Kwantlen Polytechnic University`
const dates = `Oct 2015 - Oct 2021`

const Education = () => {

  return (
    <div name='education' className='w-full bg-white flex flex-col justify-center items-center text-black py-8'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full flex skills_experience_container'>      
     
        <div className=' flex flex-col gap-10 items-center skills_experience'>                     
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Education</p>
            <span className="font-bold text-2xl text-center">{position}</span>
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

        <div className=' flex flex-col gap-10 items-center skills_experience'>  

            <div className="flex items-center justify-center">                 
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-center honors_header'>Academic Honors</p>
            </div>  
            
            <div className="flex flex-col justify-center items-center">
                <span className="text-center">Agnew Business Bursary</span>
                <p className="position">Sep 2019</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <span className="text-center">KPU Endowed Information Technology Award</span>
                <p className="position">Sep 2018</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <span className="text-center">Agnew Business Bursary</span>
                <p className="position">Sep 2018</p>
            </div>
      
        </div>                    
      </div>
    </div>
  );
};

export default Education;
