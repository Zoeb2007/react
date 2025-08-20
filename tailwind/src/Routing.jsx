import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Project from './Project'
import Useref from '../Useref'
import About from './Components/About'
import Hooks2 from './Hooks2'

const Routing = () => {
  return (
    <BrowserRouter>
    <nav>
        <Link to='/'>project</Link>
        <Link to='/use'>home</Link>
        <Link to='/hook'>hook</Link>
        <Link to='/about'>about</Link>
    </nav>
    <div>Routing
<Routes>
    <Route path='/' element={<Project/>}></Route>
    <Route path='/use' element={<Useref/>}></Route>
    <Route path='/hook' element={<Hooks2/>}></Route>
    <Route path='/about' element={<About/>}></Route>
</Routes>

    </div>
    </BrowserRouter>
  )
}

export default Routing