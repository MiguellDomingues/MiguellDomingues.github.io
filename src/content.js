import { FaGithub, FaNodeJs, FaReact, } from 'react-icons/fa';
import { SiMongodb, SiRealm, SiApollographql, SiReactrouter, SiHeroku, SiGraphql,SiAxios,SiTailwindcss } from 'react-icons/si';

import React from 'react';
import HTML from './assets/html.png';
import CSS from './assets/css.png';
import JavaScript from './assets/javascript.png';
import ReactImg from './assets/react.png';
import Node from './assets/node.png';
import Mongo from './assets/mongo.png';
import java from './assets/java.png';
import graphql from './assets/GraphQL.png'
import sql from './assets/sql.webp'
import typescript from './assets/typescript.png'

import bcvapefinder from './assets/bcvapefinder.png';
import portfolio_img_resized  from './assets/portfolio_img_resized.png'
import scraper from './assets/scraper.png'


export const EMAIL = "mailto:mdomingues1001@gmail.com"
export const LINKEDIN = "https://linkedin.com/in/m-domingues"
export const GITHUB = "https://github.com/MiguellDomingues"
export const RESUME_LINK = "https://drive.google.com/uc?id=127MP1n_1L05m13ZWlmgCBZaUJmFTKUGm&export=download"

export const project_tiles_datas = [
    {
      bg_image: portfolio_img_resized,
      title:"A Portfolio Website",
      description: "v1 of my personal website",
      source_link: "https://github.com/MiguellDomingues/MiguellDomingues.github.io",
      hosted_link: "https://miguelldomingues.github.io/",
      technology_icons_links: [
        {
          icon_cmp: <FaReact size={'1.5em'} color={'#087ea4'}/>,
          link: "https://react.dev/"
        },
        {
          icon_cmp: <SiTailwindcss size={'1.5em'} />,
          link: "https://tailwindcss.com/"
        },
        {
          icon_cmp: <FaGithub size={'1.5em'} />,
          link: "https://pages.github.com/"
        },
        {
          icon_cmp: <EmailJSIcon/>,
          link: "https://www.emailjs.com/"
        },      
      ]
    },
    {
      bg_image: bcvapefinder,
      title:" A Product Search Portal",
      description: " a browsable catalog of vaping products that were scraped from multiple e-commerce websites ",
      source_link: "https://github.com/MiguellDomingues/vape-finder-client",
      hosted_link: "http://bc-vape-finder.herokuapp.com/",
      technology_icons_links: [
        {
          icon_cmp: <FaReact size={'1.5em'} color={'#087ea4'}/>,
          link: "https://react.dev/"
        },
        {
          icon_cmp: <SiApollographql size={'1.5em'}/>,
          link: "https://www.apollographql.com/"
        },
        {
          icon_cmp: <SiGraphql size={'1.5em'}/>,
          link: "https://graphql.org/"
        },
        {
          icon_cmp: <SiRealm size={'1.5em'}/>,
          link: "https://realm.io/"
        },
        {
          icon_cmp: <SiReactrouter size={'1.5em'}/>,
          link: "https://reactrouter.com/en/main"
        },
        {
          icon_cmp: <SiHeroku size={'1.5em'}/>,
          link: "https://www.heroku.com/home?"
        },
        {
          icon_cmp: <EmailJSIcon/>,
          link: "https://www.emailjs.com/"
        },
      ]
    },
    {
      bg_image: scraper,
      title:"A Product Aggregator",
      description: "a nodejs script which extracts, transforms and loads vaping products from e-commerce sites into a cloud-hosted data store",
      source_link: "https://github.com/MiguellDomingues/vape-finder-scraper",
      hosted_link: null,
      technology_icons_links: [
        {
          icon_cmp: <FaNodeJs size={'1.5em'} />,
          link: "https://nodejs.org/en"
        },
        {
          icon_cmp: <SiMongodb size={'1.5em'} color={'green'}/>,
          link: "https://www.mongodb.com/"
        },
        {
          icon_cmp: <SiAxios size={'1.5em'} color={'#087ea4'}/>,
          link: "https://axios-http.com/"
        },
        {
          icon_cmp: <CheerioJSIcon/>,
          link: "https://cheerio.js.org/"
        },
        
      ]
    },
  ]

export const experience_data = [
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


  export const skills_data = [
    {
        name: "ReactJS",
        img: ReactImg
    },
    {
      name: "JavaScript",
      img: JavaScript
   },
   {
    name: "TypeScript",
    img: typescript
  },
   {
    name: "Java",
    img: java
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
        name: "NodeJS",
        img: Node
    },
    {
        name: "MongoDB",
        img: Mongo
    },
    {
        name: "GraphQL",
        img: graphql
    },
    {
      name: "SQL",
      img: sql
    },
]


  function CheerioJSIcon(){
    return(
      <svg width="25" height="25" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" rx="30" fill="#E88C1F"/>
      <path d="m 312 122.5 c 0.2 -2.1 -1.4 -3.1 -2.5 -4.5 c -13.1 -15.8 -29.1 -27.9 -47.6 -36.3 c -10.6 
      -4.8 -22 -8 -33.9 -9.4 c -11.4 -1.4 -22.6 -2.1 -34 -0.8 c -14.5 1.6 -28.3 5.8 -41.5 12 c -21.1 9.9 
      -38 24.9 -51.3 43.6 c -8.5 11.8 -14.6 25.1 -18.2 39.4 c -3.7 14.6 -5.8 29.3 -4.2 44.5 c 1.1 10.4 2.6 
      20.5 5.7 30.5 c 4.5 14.6 11.8 27.9 21.1 39.9 c 10.6 13.7 23.4 25.1 38.5 33.5 c 17.5 9.7 36.3 15.5 56.4 16.7 c 
      7.4 0.4 14.8 0.5 22 -0.4 c 8.6 -1 17.2 -2.9 25.6 -5.5 c 10.4 -3.3 20.2 -7.6 29.4 -13.3 c 13.2 -8.2 25.1 
      -18 34.4 -31.1 c -21.9 -16.5 -43.8 -32.8 -65.9 -49.4 c -10.1 11.4 -22.4 17.2 -37.4 17.1 c -13.6 -0.2 -25.1 
      -5.7 -33.9 -15.6 c -17.8 -20 -15.2 -51.1 5.8 -68 c 18.7 -15.1 49.3 -13 65.5 7.2 c 22 -16.5 44 -33 66 -50.1 z"
      fill="#FFF" stroke="#000" strokeWidth="18"/>
      </svg>)
  }
  
  
  function EmailJSIcon(){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 510.88 512" fill="#FCA253" alt="EmailJS">
      <rect x="270.57" width="240.31" height="240.31" rx="24"></rect> 
      <path d="M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 
        78.14l220.71 220.68a55.27 55.27 0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 29.16 0 0 
        0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03z">  
      </path>
    </svg>)
  }
  

