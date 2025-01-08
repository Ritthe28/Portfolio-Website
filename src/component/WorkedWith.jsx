import React from 'react'
import Cognifyz from "../../assets/Cognifyz.png"
import codesoft from "../../assets/Codesoft.png"
const WorkedWith = () => {
  return (
    <div className='min-w-[100vw] h-[100px] X bg-slate-600 flex'>
       <span className=' mt-0 p-1 text-white underline text-xl ml-3 max-w-fit'>Worked With</span>

   <span className='h-[100%] w-[90%] mr-0 flex justify-end mb-0'>
    <span className='mx-1'>
        
<img src={Cognifyz} className='h-[80%] rounded-2xl mr-[0px] mt-[10px] '  alt="" />
   </span>
        
      <span className='mr-[4px]'><img src={codesoft} className='h-[80%] rounded-2xl mr-[0px] mt-[10px] '  alt="" />
      </span>
      
    </span>
    </div>
  )
}

export default WorkedWith
