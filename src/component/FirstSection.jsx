import React from 'react';
import self from '../../assets/self.jpg';

const FirstSection = () => {
    return (
        <div className='first-section min-h-fit sm:pb-12 flex min-w-[100vw] bg-gray-800 text-white flex-col sm:flex-row  justify-around' id='Home'>
            <div className='right flex justify-center items-center h-full mt-[14vh] p-6'>
                <img className='sm:h-1/3 sm:w-2/5 h-1/4 w-1/2 rounded-lg shadow-lg' src={self} alt="Self" />
            </div>
            <div className='left h-full sm:mt-[14vh] mt-1 text-justify p-6'>
                <p className='leading-relaxed'>
               <div>👋 Hi, I'm Rohit!</div> 

A passionate web developer with expertise in a range of programming languages and technologies, including <span className='text-green-600'> C++, Java, HTML, CSS,TailwindcCs, JavaScript, NodeJs, and React</span>. My journey in web development is fueled by my curiosity and enthusiasm to build intuitive and dynamic web experiences.

I thrive on turning complex problems into simple, beautiful, and user-friendly solutions. Whether it's crafting a responsive layout or developing a full-fledged web application, I am committed to delivering high-quality work and continuously expanding my skill set.                </p>
            </div>
        </div>
    );
}

export default FirstSection;
