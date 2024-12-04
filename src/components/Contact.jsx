import React from 'react'
function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-r from-cyan-950 to-black text-white '>
        <div className='about1 flex flex-col justify-center items-center md:px-3 '>
            <div className=''>
                <p className='text-4xl mt-8'>Contact</p>
            </div>
            <div className='w-2/3 md:w-1/3 items-center text-black mt-3'>
                <form className='flex flex-col py-3 space-y-4'>
                    <input type='text' name="from_name" placeholder='Enter your Name' className='border-2 focus:outline-none rounded-md' required></input>
                    <input type='text' name="from_email" placeholder='Enter your Email' className='border-2 focus:outline-none mt-5 rounded-md' required></input>
                    <textarea name="message" type='text' rows='8' className='mt-3 rounded-md' placeholder='Description' required></textarea>
                </form>
                <button type="submit" className='sm:py-2 md:ml-52 h-10 w-24  items-center border-2 border-fuchsia-500 bg-fuchsia-500 rounded-md hover:scale-105 duration-500 hover:bg-fuchsia-700'>Send</button>
            </div>
        </div>
        <div className="font-poppins text-center text-sm mt-36 md:mt-56 ">
        © Copyright <b>{currentYear}</b>  Designed & Built by <b>Sriraam</b>
      </div>
    </div>
  )
}

export default Contact