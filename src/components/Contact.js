import React from 'react'
//import contact from '../assets/contact.gif';

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-white flex justify-center items-center p-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 flex justify-center'>
            <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>
              Contact
            </p>
            {/*<p className='py-4'>Submit the form below or shoot me an email - damandeepdhillon27@gmail.com</p>*/}
          </div>
          <div className='pb-8 flex justify-center'>
            <p>
            ubmit the form below or shoot me an email - damandeepdhillon27@gmail.com
            </p>
          </div>
          <div className='flex justify-center'>
            <form method='POST' action="https://getform.io/f/398bf01c-0807-4c1f-a310-11d4d4e58adf" className=' flex flex-col max-w-[600px] w-full'>
                
                <input className='shadow-lg shadow-[#040c16]  p-2 rounded-md' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 shadow-lg shadow-[#040c16] rounded-md' type="email" placeholder='Email' name='email' />
                <textarea className=' border-black  shadow-lg shadow-[#040c16] p-2 rounded-md' name="message" rows="6" placeholder='Message'></textarea>
                <button className='text-black border-black border-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>      
          </div>    
      </div>
    </div>
  )
}

export default Contact