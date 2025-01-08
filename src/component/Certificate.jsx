import React from 'react'
import Nodejs from "../../assets/Nodejs.jpg"
import cloud from "../../assets/cloud.jpg"

const Certificate = () => {
  return (
    <div>
        <div className='text-white'>
            <h1 className='m-auto w-fit text-4xl'>Certificates</h1>
        </div>
      <div className='p-2 w-[100vw]'> 
        <img className='min-w-[80%] max-w-[80%] m-auto' src={Nodejs} alt="" />
      </div>
      <div className='p-2 w-[100vw]'> 
        <img className='min-w-[80%] max-w-[80%] m-auto' src={cloud} alt="" />
      </div>
    </div>
  )
}

export default Certificate
