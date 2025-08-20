import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-800 h-[100vh] w-[100%] mx-auto mx-w-md text-white'>
        <div>
        <div className='text-5xl ml-[570px] relative top-[170px]'>About <b className='text-cyan-400'> Me</b>
        </div>
        <p>
        <b className='text-3xl ml-[570px] relative top-[170px] pt-[10px]'>Full Stack Developer</b>
        </p>
        <p className='ml-[570px] relative top-[170px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ut expedita eveniet aperiam quis! Assumenda animi at et hic amet consequuntur eum blanditiis sit, incidunt soluta libero! Temporibus, vero esse. Vero.</p>
        <button className='bg-cyan-500 ml-[570px] p-[10px] relative top-[185px] rounded-full text-[18px]' > <a href="">Read More</a></button>
        </div>
        <div>
            <img className='h-[200px] w-[200px] ml-40 mt-[-50px] rounded-full' src="Man.webp" alt="" />
        </div>
    </div>
  )
}

export default About