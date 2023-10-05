import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

import { EMAIL,LINKEDIN ,GITHUB,RESUME_LINK  } from '../content.js'


export const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-yellow-400 to-orange-600 text-black-900 z-20'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '100px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex font-bold text-white'>
        <li className=' hover:text-black'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li  className=' hover:text-black'>
          <Link to='experience' smooth={true} duration={500} offset={-76}>
            Experience
          </Link>
        </li>
        <li  className=' hover:text-black'>
          <Link to='work' smooth={true} duration={500} offset={-76}>
            Projects
          </Link>
        </li>
        <li  className=' hover:text-black'>
          <Link to='skills' smooth={true} duration={500} offset={-76}>
            Skills
          </Link>
        </li>
        <li  className=' hover:text-black'>
          <Link to='education' smooth={true} duration={500} offset={-76}>
            Education
          </Link>
        </li>     
        <li  className=' hover:text-black'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-20 text-white hover:cursor-pointer hover:text-black'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-yellow-400 to-orange-600 flex flex-col justify-center items-center text-white font-bold'
        }
      >
        <li className='py-6 text-4xl hover:text-black'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-black'>
          {' '}
          <Link onClick={handleClick} to='experience' smooth={true} duration={500} offset={-76}>
            Experience
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-black'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500} offset={-76}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-black'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} offset={-76}>
            Skills
          </Link>
        </li>
        <li  className='py-6 text-4xl hover:text-black'>
          <Link onClick={handleClick} to='education' smooth={true} duration={500} offset={-130}>
            Education
          </Link>
        </li>   
        <li className='py-6 text-4xl hover:text-black'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} offset={-76}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={LINKEDIN} target="_blank" rel="noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={GITHUB} target="_blank" rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={EMAIL}>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={RESUME_LINK}>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
