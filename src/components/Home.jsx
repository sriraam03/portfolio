import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import Heroimg from "../assets/porto1.jpeg";
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';
import {fadeIn} from './variants';
function Home() {
  const [typeEffect] = useTypewriter({
    words:['Front End Developer','React Js Developer','UI Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:30
  })  
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-r from-cyan-950 to-black text-white'>
        <motion.div variants={fadeIn("left",0.2)} initials="hidden" whileInView={"show"} viewport={{once: false,amount:0.7}} className='max-w-screen-2xl h-full mx-auto flex flex-col md:flex-row  justify-center items-center  px-5 md:px-3 border-pink-600'>
            <div className='h-1/3 w-full md:w-1/3 flex flex-col '>
                <h1 className='text-5xl h-1/3 md:px-16 font-semibold md:font-bold pt-5'>Hello <span className='wave'>👋</span></h1>
                <p className='h-1/3 md:px-16 text-3xl '>I'm Sriraam
                    <br/>
                    <span className='font-semibold'>{typeEffect}</span>   
                 </p>
                
                <div className='flex flex-row'>
                    <Link to="projects" smooth duration={500} offset={-80} className='group h-10 w-32 hover:cursor-pointer items-center flex gap-2  ml-28 md:ml-44 mt-4 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-700 text-black '>
                        <p className='ml-3 text-xl'>Projects</p>
                        <span className='group-hover:rotate-90 duration-200'><IoIosLogOut className='size-6'/></span>
                    </Link>
                    
                </div>
            </div>
            <div className='md:w-1/3'>
                <img src = {Heroimg} alt='mypro' className='mt-5 size-44 rounded-full md:size-96'></img>
            </div>

        </motion.div>
        
    </div>
  )
}

export default Home