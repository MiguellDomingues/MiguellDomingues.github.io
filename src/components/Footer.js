import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const EMAIL = "mailto:mdomingues1001@gmail.com"
const LINKEDIN = "https://linkedin.com/in/m-domingues"
const GITHUB = "https://github.com/MiguellDomingues"
const RESUME_LINK = "https://drive.google.com/uc?id=127MP1n_1L05m13ZWlmgCBZaUJmFTKUGm&export=download"

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
                href={EMAIL}
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