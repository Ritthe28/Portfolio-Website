import React from 'react'
import weather from "../../assets/weather.png"
import RealEstateProject from "../../assets/RealEstateProject.png"
import Todo from "../../assets/Todo.png"

const Projects = () => {
  return (
    <div className='min-w-[100vw] mt-[50px] bg-black text-white' id='Projects'>
        <div className='min-w-[100%] min-h-[12vh] text-[20px] font-bold bg-slate-600 flex justify-center items-center'>...Projects...</div>
      <div className='container min-w-full flex sm:flex-row flex-col justify-around mt-[30px]'>
      <div className='left sm:w-[40%] flex justify-center items-center '>
      <img src={weather} alt="" className='w-[70%] rounded-md' />
      </div>
<div className='right sm:w-[45%] text-justify  text-white pr-4 sm:ml-[-10.75rem]  m-[3.25rem]'>
    <h1 className='font-black'>Weather Website</h1>
    Stay informed with the latest weather updates using our sleek and intuitive Weather Wiz. Built with HTML, CSS, and JavaScript, our website provides real-time data on temperature, humidity, and wind speed. Whether you're planning your day or preparing for a trip, Weather Wiz ensures you're always equipped with essential weather information at your fingertips.
    <div>Checkout <a href="https://github.com/Ritthe28/Weather-App" className='text-green-600'>https://github.com/Ritthe28/Weather-App</a>
    </div>
    </div>

      </div>
      <div className='container min-w-full flex sm:flex-row flex-col justify-around mt-[30px]'>
      <div className='left sm:w-[40%] flex justify-center items-center '>
      <img src={RealEstateProject} alt="" className='w-[70%] rounded-md' />
      </div>
<div className='right sm:w-[45%] text-justify  text-white pr-4 sm:ml-[-10.75rem]  m-[3.25rem]'>
<h1 className='font-black'>Real Estate Website</h1>
Discover your dream home with EstateEase, the modern and dynamic real estate platform crafted using TailwindCSS and React. Our website offers a seamless and responsive experience, showcasing properties with stunning visuals and intuitive navigation. Easily browse listings, view high-quality photos, and access essential property details all in one place. Whether you're buying, selling, or renting, EstateEase provides the tools and information you need to make informed decisions and find the perfect property.


<div>checkout :- <a href="https://github.com/Ritthe28/Real-Estate-Website" className='text-green-600'>https://github.com/Ritthe28/Real-Estate-Website</a></div>
</div>

      </div>
     
      <div className='container min-w-full flex sm:flex-row flex-col justify-around mt-[30px]'>
      <div className='left sm:w-[40%] flex justify-center items-center '>
      <img src={Todo} alt="" className='w-[70%] rounded-md' />
      </div>
<div className='right sm:w-[45%] text-justify  text-white pr-4 sm:ml-[-10.75rem]  m-[3.25rem]'>
<h1 className='font-black'>Task Master</h1>

    Boost your productivity with TaskMaster, the ultimate to-do list application designed with TailwindCSS and React. TaskMaster offers a sleek, user-friendly interface that helps you effortlessly manage your tasks and stay organized. Easily add, edit, and delete tasks, set priorities, and track your progress. Whether you're managing daily chores or planning major projects, TaskMaster ensures you stay on top of your to-dos with style and efficiency.
    <div>Checkout <a href="https://github.com/Ritthe28/React-Todo-Project" className='text-green-600'>https://github.com/Ritthe28/React-Todo-Project</a></div>
    </div>

      </div>
    </div>
  )
}

export default Projects
