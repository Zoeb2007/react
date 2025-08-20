import React from 'react'

const Ourser = () => {
  return (
    <div className='bg-gray-800 h-[100vh] w-100% text-white '>
        <b><p className='text-4xl ml-95 relative top-[50px]'>Our <span className='text-cyan-400 '>Services</span></p></b>
    <div className='flex text-white'>

        <div className='bg-gray-600 mt-[100px] ml-[40px] rounded-lg w-[300px] p-[10px]'>
          <p className='text-xl ml-[45px] mb-[5px]'><strong>Web Development</strong></p>
      <img className='h-[100px] ml-[55px] rounded-lg' src="weblog.png" alt="" />
      <p className=' pt-[10px]' ><center>Lorem ipsum dolor sit amet consectet adipisicing elit.Minus exercitationem accusamus quaerat porro suscipit perferendis .</center>
         <button className='bg-cyan-400 p-[8px] rounded-full ml-[75px] mt-[10px] text-black text-xl'><a href=""><b>Read More</b></a></button>
         </p>
        </div>

        <div className='bg-gray-600 mt-[100px] ml-[50px] rounded-lg w-[300px] p-[10px]'>
          <p className='text-xl ml-[45px] mb-[5px]'><strong>Graphic Designing</strong></p>
        <img className='h-[100px] ml-[85px] rounded-lg' src="Paint.png" alt="" />
        <p className='pt-[10px]'><center>Lorem ipsum dolor sit amet consectet adipisicing elit.Minus exercitationem accusamus quaerat porro suscipit perferendis.</center></p>
        <button className='bg-cyan-400 p-[8px] rounded-full ml-[75px] mt-[10px] text-black text-xl'><a href=""><b>Read More</b></a></button>
        </div>

        <div className='bg-gray-600 mt-[100px] mr-[50px] ml-[50px] rounded-lg w-[300px] p-[10px]'>
      <p className='text-xl ml-[45px] mb-[5px]'><strong>Digital Marketing</strong></p>
        <img className='h-[100px] ml-[85px] rounded-lg' src="bar.png" alt="" />
        <p className='pt-[10px]'><center>Lorem ipsum dolor sit amet consectet adipisicing elit.Minus exercitationem accusamus quaerat porro suscipit perferendis.</center></p>
        <button className='bg-cyan-400 p-[8px] rounded-full ml-[75px] mt-[10px] text-black text-xl'><a href=""><b>Read More</b></a></button>
        </div>
    </div>
    </div>
  )
}

export default Ourser