import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Ourser from './Ourser';
import Contact from './Components/Contact';
import Profile from './Profile'; // <-- assumed to exist

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-gray-800 h-[100vh] w-full'>
        <nav className='bg-gray-600 text-white'>
          <ul className='flex gap-7 bg-grey ml-[500px]'>
            <div>
              <h1 className='relative right-[450px] text-[25px] pt-1 hover:text-sky-500'>Portfolio</h1>
            </div>
            <li className='hover:text-sky-400 pt-3'><Link to='/'>Profile</Link></li>
            <li className='hover:text-sky-400 pt-3'><Link to='/about'>About</Link></li>
            <li className='hover:text-sky-400 pt-3'><Link to='/services'>Services</Link></li>
            <li className='hover:text-sky-400 pt-3'><Link to='/portfolio'>Portfolio</Link></li>
            <li className='hover:text-sky-400 pt-3'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Ourser />} />
          <Route path='/contact' element={<Contact />} />
          {/* Optional: Add Portfolio route if you have one */}
          {/* <Route path='/portfolio' element={<Portfolio />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
