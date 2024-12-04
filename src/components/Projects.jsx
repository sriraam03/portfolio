import React from 'react'
import { Link } from 'react-scroll';

function Projects() {
    const projects = [
        {
            id: 1,
            name: "Siya-A Health Assistant",
            href: "https://github.com/sriraam03/Siya-A-Health_Assistant",
            des: "Siya is a Health Assistant which is web-based application aimed at predicting diseases using symptom analysis.It will predict the disease and suggest the precautions with symptoms as a input"
        },
        {
            id: 2,
            name: "CardioScope",
            href:"https://github.com/sriraam03/Siya-A-Health_Assistant",
            des: "Utilized Python libraries to develop a heart disease prediction model achieving 88% accuracy. Applied data preprocessing, exploratory analysis, and feature selection. Evaluated multiple algorithms including Logistic Regression, K-Nearest Neighbors, and Random Forest, using the Cleveland dataset from UCI."
        },
        {
            id: 3,
            name: "AI-Writing Assistant",
            href: "https://github.com/sriraam03/AI-writing--assistant",
            des: "This is an advanced and versatile writing assistant designed. It provides grammar and spell check, paraphrasing capabilities, and automatic email generator, making it your go-to tool for flawless and efficient writing."
        },
        {
            id: 4,
            name: "Available Soon",
            href: "https://github.com/sriraam03/Siya-A-Health_Assistant",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facilis ullam quod dignissimos quis. Sint enim autem at odit ratione reprehenderit, explicabo doloribus! Voluptate veritatis quidem quam. Ipsum, praesentium doloribus!"
        },
    ]
  
    return ( 
        <div name="projects" className='min-h-screen w-full bg-gradient-to-r from-cyan-950 to-black text-white  overflow-hidden '>
            <div className='about1 md:px-64 justify-center items-center'>
                <div className=' max-w-lg ml-28 md:ml-96'>
                    <Link to={projects} smooth duration={500} className='text-4xl mt-3'>Projects</Link>
                </div>
            </div>
            <div className=' mt-6 mx-auto mb-2 grid w-[90%] gap-4 sm:mb-8 md:grid-cols-2'>
                {projects.map(({ id, name, href,des }) => (
                    <div key={id} className='shadow-md shadow-gray-400 border-b-cyan-950  hover:scale-100  hover:shadow-md duration-200 hover:shadow-white rounded-md px-6 py-3'>
                        <h1 className='text-2xl font-bold mt-5'>{name}</h1>
                        <p className=' py-3'>{des}</p>
                        <div className=''>
                            <button className='ml-28 h-10 w-24 md:ml-60 mt-2  border-2 bg-fuchsia-500 rounded-md hover:bg-fuchsia-700'>
                                <a href={href}>GitHub</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
