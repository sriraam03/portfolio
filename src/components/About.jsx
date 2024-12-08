import React from 'react'
import AboutImg from '../assets/about1.png'
import {motion} from 'framer-motion'
function About() {
  return (
    <div name="about" className=' text-white h-screen md:w-full bg-gradient-to-r from-cyan-950 to-black px-5 z-0'>
        <div className='text-4xl font-semibold'>About</div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}  transition={{duration:0.5,delay:1}} className='about1 flex flex-col md:flex-row w-full mt-4 md:px-20 shadow-md shadow-gray-500 rounded-sm'>
            <p className='md:w-1/3 md:text-xl ml-3 md:mt-4'>I’m a passionate web developer with a keen interest in creating visually appealing and user-friendly interfaces. I enjoy working on the front-end , leveraging technologies like HTML5,JavaScript,Reactjs, Tailwind CSS.Crafting seamless user experiences and solving complex problems through code excites me the most. Let's build something amazing together!</p>
            <div className='md:ml-72 '>
                <img src={AboutImg} alt='about' className=''></img>
            </div>
            
        </motion.div>
        
        
    </div>
  )
}

export default About