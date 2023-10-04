import React from 'react'
import { useEffect } from 'react'

const experience_data = [
  {
    position: "Intern Developer",
    company: "Groundswell Cloud Solutions",
    dates: "May 2021 - May 2022",
    duties: [
      `Independently delivered a full-stack custom-code search portal SPA that enables users to filter and browse tagged content.
      Implemented an internal partner portal and process workflow automations to streamline partner onboarding and registration`,
                                          
      `Developed custom-code UI and controller components for a Task Management app on a longer term engagement.
       Became the project UI SME after several sprints, onboarding new developers to the project and performing code reviews`,

      `Debugged a REST API Twilio integration for an SMS Service which improved message delivery rates by 25%.
       Implemented a dashboard for displaying SMS delivery metrics to administrators`,

      `Helped implement a custom sharing modal for a Lead Management app, providing visibility of customer data to internal users.
       Helped migrate >1,000,000 customer records on production to the new sharing modal`,

      `Helped develop a REST API integration with a payment provider to validate credit cards`      
    ]
  },
  {
    position: "Peer Tutor",
    company: "Kwantlen Polytechnic University",
    dates: "Jan 2019 - Aug 2020",
    duties: [
      `Assisted peers achieve academic success by tutoring Computer Science subjects in both 1-on-1 and group sessions`,
                                          
      `Utilized web-based collaboration tools to improve tutee transition to remote learning`,   
      
      `Achieved 75 tutoring-hours in a 2 month period, improving average Tutoring Centre attendance rates`
    ]
  },
  {
    position: "Programming Instructor",
    company: "Sager Education Inc",
    dates: "Dec 2019 - Mar 2020",
    duties: [
      `Taught fundamental computer science concepts to classes of 3-5 high school students using Java`,
                                          
      `Utilized small class sizes and 1-on-1 coaching to prepare students for the Advanced Placement Computer Science exam and the Canadian Coding Competition`,    
    ]
  },
  
]

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
      <div class="card">      
          <div class="experience_header">
            <span className="font-bold text-2xl">{position}</span>
            <p class="position">{company}</p>
            <p class="position">{dates}</p>
          </div>
          {duties.map((duty, idx)=><p class="info" key={idx}><span class="checkmark">✔</span>{duty}</p>)}
        </div>
      </li>)
}


