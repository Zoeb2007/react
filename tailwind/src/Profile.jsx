import React from 'react'

const Profile = () => {
  return (
    <div className='bg-gray-800 h-[100vh] w-100%'>

        <b><p className='text-5xl ml-95 relative top-[50px] text-white'>My <span className='text-cyan-400 '>Profile </span></p></b>

        <div className='text-white flex gap-50'>
      <p className='text-[30px] mt-30 ml-10'>
        <h2>Hello, It's Me</h2>
        <h1 className='text-[45px]'><b>Zoeb Kabadi</b></h1>
        <h4 className='text -[20px]'>And I'm a <b className='text-cyan-400'>Full Stack Developer</b></h4>
        <p className='text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam nam possimus aspernatur laborum perspiciatis.</p>

        <ul className='flex gap-5 mt-[10px]'>

          <li><a href="https://www.facebook.com/"><img className='h-[20px] w-[20px] rounded-full' src="https://w7.pngwing.com/pngs/404/327/png-transparent-black-facebook-logo-computer-icons-social-media-youtube-facebook-messenger-social-media-logo-internet-social-network-thumbnail.png" alt="" /></a></li>

          <li><a href="https://www.instagram.com/?utm_source=pwa_homescreen"><img className='h-[20px] w-[20px] rounded-full' src="https://w7.pngwing.com/pngs/258/274/png-transparent-computer-icons-instagram-black-riviera-instagram-logo-share-icon-black-instagram-thumbnail.png" alt="" /></a></li>

          <li><a href="https://x.com/"><img className='h-[20px] w-[20px] rounded-full' src="https://w7.pngwing.com/pngs/515/1/png-transparent-twitter-logo-computer-icons-logo-twitter-icon-computer-wallpaper-monochrome-bird-thumbnail.png" alt="" /></a></li>

          <li><a href="https://web.whatsapp.com/"><img className='h-[20px] w-[20px] rounded-full' src="https://w7.pngwing.com/pngs/218/979/png-transparent-whatsapp-logo-computer-icons-whatsapp-whatsapp-text-android-symbol-thumbnail.png" alt="" /></a></li>

        </ul>  

        <button className='mt-[15px] bg-cyan-500 rounded-full p-[10px] text-[20px]'><a href="">Download CV</a></button>    
      </p>
      <div>
        <img className='h-[55%] mt-[40%] md:shrink-0 rounded-full' src="Man.webp" alt="" />
      </div>

    </div>
    </div>
  )
}

export default Profile
