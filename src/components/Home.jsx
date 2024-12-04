import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import Heroimg from "../assets/porto1.jpeg";
import { useTypewriter } from 'react-simple-typewriter';
import Hello from '../assets/hello.png'
import {motion} from 'framer-motion'
function Home() {
  const [typeEffect] = useTypewriter({
    words:['Front End Developer','React Js Developer','UI Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:30
  })  
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-r from-cyan-950 to-black text-white'>
        <div className='max-w-screen-2xl h-full mx-auto flex flex-col md:flex-row  justify-center items-center  px-5 md:px-3 border-pink-600'>
            <div className='h-1/3 w-full md:w-1/3 flex flex-col '>
                <motion.h1 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className='text-5xl h-1/3 md:px-16 font-semibold md:font-bold pt-5 flex'>Hello <img src={Hello} alt='hello' className='wave mt-0 size-14 ml-6'></img></motion.h1>
                <motion.p initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} className='h-1/3 md:px-16 text-3xl '>I'm Sriraam
                    <br/>
                    <span className='font-semibold'>{typeEffect}</span>   
                 </motion.p>
                
                <div className='flex flex-row'>
                    <motion.Link to="projects" initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} smooth duration={500} offset={-80} className='group h-10 w-32 hover:cursor-pointer items-center flex gap-2  ml-28 md:ml-44 mt-4 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-700 text-black '>
                        <p className='ml-3 text-xl'>Projects</p>
                        <span className='group-hover:rotate-90 duration-200'><IoIosLogOut className='size-6'/></span>
                    </motion.Link>
                    
                </div>
            </div>
            <div className='md:w-1/3'>
                <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} src = {Heroimg} alt='mypro' className='mt-5 size-44 rounded-full md:size-96'></motion.img>
            </div>

        </div>
        
    </div>
  )
}

export default Home