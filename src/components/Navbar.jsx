import React, { useState } from 'react'
import Mainlogo from '../assets/sr.png'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
const Navbar = () => {
  const [nav, setNav] = useState(false);  

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" }
  ];  

  return (
    <div className='text-white items-center justify-between py-5 bg-gradient-to-r from-cyan-950 to-black h-20 w-full fixed flex'>
        <div className=''>
            <img src={Mainlogo} className='hover:cursor-pointer h-16 md:h-16 w-24' alt="Main Logo"/>
        </div>
        <ul className='hidden md:flex text-xl px-16 gap-7'>
            {links.map(({ id, link }) => (
                <li key={id} className='hover:cursor-pointer hover:scale-125 duration-200 capitalize'>
                    <Link to={link} smooth duration={500} offset={-80}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='md:hidden z-10 px-6'>
            {nav ? <FaTimes size={25}/> : <FaBars size={25} />}
        </div>
        {nav && (
            <ul className='flex flex-col z-100 w-full h-screen justify-center items-center absolute top-0 left-0 bg-gradient-to-r from-cyan-950 to-black'>
                {links.map(({ id, link }) => (
                    <li key={id} className='hover:cursor-pointer text-4xl px-4 py-3 capitalize'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} offset={-80}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
}

export default Navbar;
