import React from 'react'
import emailjs from '@emailjs/browser';

const EMAILJS_INFO = {
  SERVICE_ID:  process.env.REACT_APP_SERVICE_ID  || "", 
  TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID || "",
  PUBLIC_KEY:  process.env.REACT_APP_PUBLIC_KEY  || "" 
}

const Contact = () => {

 const [message_sent, setMessageSent] = React.useState(false)
 const [message_sending, setMessageSending] = React.useState(false)
 const [message_success, setMessageSuccess] = React.useState(undefined)

 const form_ref = React.useRef(null)
 const button_ref = React.useRef(null)

 const sendEmail = (e) => {
  e.preventDefault(); // prevents the page from reloading when form submitted
  button_ref.current.style.visibility = "hidden" //hide the button
  form_ref.current.style.visibility = "hidden" //hide the form

  setMessageSent(true)
  setMessageSending(true)

  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_INFO

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form_ref.current, PUBLIC_KEY )
    .then((result) => {
        console.log(result.text);
        setMessageSuccess(true)
    }, (error) => {
        console.log(error.text);
        setMessageSuccess(false)
    }).finally(()=>{
      setMessageSending(false)
    })  
};

function messageSuccess(){
  return(<><p className="pb-2">Got it. Thanks for the message! I'll get back to you as soon as I can!</p>
            <p> If you wish to send another message, please refresh the page</p>
          </>)
}

function messageFailed(){
  return(<p>
    Sorry, something went wrong! Email me directly at <a href="mailto:mdomingues1001@gmail.com">mdomingues1001@gmail.com</a>
    </p> )
}

  return (
    <div name='contact' className='w-full bg-white flex justify-center items-center px-8 pt-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 flex justify-center'>
            <p className='text-4xl font-bold inline border-b-4 text-black border-pink-600'>Contact</p> 
          </div>
          <div className='pb-8 flex justify-center'>
            <p>
              If you have any questions, available opportunities or suggestions, leave a message!
            </p>
          </div>
          <div className='flex justify-center relative'>
            <div className='contact_form_message'>
              {message_sent && (message_sending ? <p>sending</p> : message_success ? messageSuccess() : messageFailed()) }
            </div>
            <form ref={form_ref} onSubmit={sendEmail} className=' flex flex-col max-w-[600px] w-full'>   
                <input className='shadow-lg shadow-[#040c16]  p-2 rounded-md' type="text" placeholder='Name' name="from_name" required/>
                <input className='my-4 p-2 shadow-lg shadow-[#040c16] rounded-md' type="email" placeholder='Email'  name="reply_to" required/>
                <textarea className=' border-black  shadow-lg shadow-[#040c16] p-2 rounded-md' name="message" rows="6" placeholder='Message' required maxLength={400}></textarea>
                <button 
                  ref={button_ref}
                  className='text-black border-black border-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
                  onClick={e=>{}}>
                    Let's Collaborate
                </button>
            </form>      
          </div>    
      </div>
    </div>
  )
}

export default Contact
