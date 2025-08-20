import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Routing from './Routing'
import Project from './Project'
import Hooks2 from './Hooks2'
import About from './Components/About'

const Routing2 = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='/' element={<Project/>} ></Route>
                <Route path='/Hooks' element={<Hooks2/>}></Route>
                <Route path='/About' element={<About/>}></Route>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Routing2