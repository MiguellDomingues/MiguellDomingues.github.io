import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import { EMAIL,LINKEDIN ,GITHUB,RESUME_LINK  } from '../content.js'

const Footer = () => {

  return (
    <div className='w-full h-[15vh] bg-gradient-to-r from-yellow-400 to-orange-600 flex flex-col justify-center items-center'>
          <ul className='flex gap-4 justify-center items-center p-4'>     
            <li >
              <a
                className=' text-white hover:text-black'
                href={LINKEDIN}
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                className=' text-white hover:text-black'
                href={GITHUB} target="_blank"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                className=' text-white hover:text-black'
                href={`mailto:${EMAIL}`}
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li>
              <a
                className=' text-white hover:text-black'
                href={RESUME_LINK}
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            
          </ul>

          
     
      <div className=''><i>©2023. Built by Miguel Domingues</i></div>
    </div>
  )
}

export default Footer