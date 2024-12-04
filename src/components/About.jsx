import React from 'react'
import AboutImg from '../assets/about1.png'
function About() {
  return (
    <div name="about" className=' text-white h-screen md:w-full bg-gradient-to-r from-cyan-950 to-black px-5 '>
        <div className='text-4xl font-semibold'>About</div>
        <div className='about1 flex flex-col md:flex-row w-full mt-4 md:px-20 shadow-md shadow-gray-500 rounded-sm'>
            <p className='md:w-1/3 md:text-xl ml-3 md:mt-4'>I’m a passionate web developer with a keen interest in creating visually appealing and user-friendly interfaces. I enjoy working on the front-end and back-end, leveraging technologies like HTML, Tailwind CSS, MongoDB, Express.js, and Node.js.Crafting seamless user experiences and solving complex problems through code excites me the most. Let's build something amazing together!</p>
            <div className='md:ml-72 '>
                <img src={AboutImg} alt='about' className=''></img>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default About