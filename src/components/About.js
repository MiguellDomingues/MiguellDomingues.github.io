import React from 'react'

const position = `Bachelor of Technology`
const company  = `Kwantlen Polytechnic University`
const dates = `Oct 2015 - Oct 2021`

const About = () => {
    //bg-black text-white
  return (
    <div name='experience' className='w-full md:auto bg-white text-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
        <div className='pb-8  width-full flex '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Education
          </p>
        </div>

        <div class="experience_header">
            <span className="font-bold text-2xl">{position}</span>
            <p class="position">{company}</p>
            <p class="position">{dates}</p>
        </div>

        Major: Information Technology (With Distinction), 3.77 GPA
      </div>
  </div>
  )
}

export default About

/*
 return (
    <div name='about' className='w-full bg-white text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='pb-8  width-full flex '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Experience
          </p>
        </div>
            <div className='pb-8  width-full flex  '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Education</p>
                </div>

            <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    
                    <div>
                        <p>
                            {ABOUT_CONTENT}
                        </p>
                    </div>
            </div>            
        </div>
            
    </div>
    
  )
*/