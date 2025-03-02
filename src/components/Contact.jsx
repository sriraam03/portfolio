import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion';
function Contact() {
  const currentYear = new Date().getFullYear();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9ftu9li', 'template_6zrg9jj', form.current, {
        publicKey: 'nzMhOVShvho9YNHae',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-r from-cyan-950 to-black text-white z-0'>
        <div className='about1 flex flex-col justify-center items-center md:px-3 '>
            <div className=''>
                <motion.p  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.5}}className='text-4xl mt-8'>Contact</motion.p>
            </div>
            <div className='w-2/3 md:w-1/3 items-center text-black mt-3'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col py-3 space-y-4'>
                    <motion.input  initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} type="text" name="from_name" placeholder='Enter your Name' className='border-2 focus:outline-none rounded-md' required></motion.input>
                    <motion.input initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} type="text" name="from_email" placeholder='Enter your Email' className='border-2 focus:outline-none mt-5 rounded-md' required></motion.input>
                    <motion.textarea initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} type="text" name="message"  rows='8' className='mt-3 rounded-md' placeholder='Description' required></motion.textarea>
                    <motion.button initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} type="submit" value="Send" className='sm:py-2 md:ml-52 h-10 w-24  items-center border-2 border-fuchsia-500 bg-fuchsia-500 rounded-md hover:scale-105 duration-500 hover:bg-fuchsia-700'>Send</motion.button>
                </form> 
            </div>
            <div className='flex gap-8 mt-5'>
              <a href='https://github.com/sriraam03' className=''><FaGithub className='size-10 hover:scale-125 duration-200 hover:cursor-pointer'/></a>
              <a href='https://www.linkedin.com/in/sriraam-kn-7184871b0/' className=''><FaLinkedin className='size-10 hover:scale-125 duration-200 hover:cursor-pointer'/></a>
            </div>
        </div>
        <div className="font-poppins text-center text-sm mt-20 md:mt-44 ">
        © Copyright <b>{currentYear}</b>  Designed & Built by <b>Sriraam</b>
      </div>
    </div>
  )
}

export default Contact