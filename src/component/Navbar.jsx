import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Navbar = () => {
    return (
        <div className='bg-gray-900 flex flex-row items-center h-[14vh] p-4 fixed w-[100vw]'>
            <div className='sm:ml-auto w-full sm:w-3/5 flex flex-row justify-between'>
            <div className='hover:bg-gray-700 duration-300 rounded-md items-center hidden sm:block sm:flex '><a href="rohitritthe11@gmail.com" className='text-white '>rohitritthe11@gmail.com</a></div>
                <div className='flex-grow flex justify-around text-white'>
                 <a href="#Home">   <button className='hover:bg-gray-700 rounded-md duration-300 px-3 py-1 rounded-md'>Home</button></a>
                  <a href="#Projects">  <button className='hover:bg-gray-700 duration-300 px-3 py-1 rounded-md'>Project</button></a>
                <a href="#Contact">    <button className='hover:bg-gray-700 duration-300 px-3 py-1 rounded-md'>Contact</button></a>
                </div>
                <div className='w-1/5 hidden sm:flex justify-around'>
                    <a href="https://github.com/Ritthe28"><img className='w-[35px] h-[35px] rounded-full' src={github} alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/rohit-ritthe-332043245/">
                        <img className='w-[35px] h-[35px] rounded-full' src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
