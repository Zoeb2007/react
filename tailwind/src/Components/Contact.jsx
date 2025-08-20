import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
        <div className='bg-gray-800 h-[100vh]'>
            <b><p className='text-4xl ml-95 relative top-[50px] text-white'>Contact <span className='text-cyan-400 '>Me!</span></p></b>
        
        <div className='flex gap-[10px]'>
            <div>
        <input className='bg-gray-700 mt-25 ml-55 h-[35px] w-[275px] p-[5px] rounded-lg text-white' type="text" placeholder='Full Name'/>
            </div>
            <div>
        <input className='bg-gray-700 mt-25 h-[35px] w-[275px] p-[5px] rounded-lg text-white' type="text" placeholder='Email Address'/>
            </div>
        </div>


        <div className='flex gap-[10px]'>
            <div>
        <input className='bg-gray-700 mt-[15px] ml-55 h-[35px] w-[275px] p-[5px] rounded-lg text-white' type="text" placeholder='Mobile Number'/>
            </div>
            <div>
        <input className='bg-gray-700 mt-[15px] h-[35px] w-[275px] p-[5px] rounded-lg text-white' type="text"  placeholder='Email Subject'/>
            </div>
        </div> 

        <div className='Upp'>
            <input className='bg-gray-700 ml-55 mt-[15px] h-[180px] w-[560px] p-[5px] rounded-lg text-white ]' type="text"  placeholder='Your Message'/>
        </div>


        </div>

    </div>
  )
}

export default Contact