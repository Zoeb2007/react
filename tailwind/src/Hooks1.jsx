import React, { useState } from 'react'

const Hooks1 = () => {
    const [user,setUser]=useState(0)
    const change=()=>{
setUser(prev=>prev+1)
    }
  return (
    <div>{user}
        <button onClick={change}>Incriment</button>
        <button></button>
    </div>
  )
}

export default Hooks1

// import React from 'react'
// import Routing from './Routing'
// // import Hooks from './Hooks'
// // import Hooks2 from './Hooks2'
// // import Hooks1 from './Hooks1'
// // import Project from './Project'
// // import Useref from './Useref'
// // import About from './Components/About'

// const App = () => {
//   return (
//     <div>
//       {/* <About/> */}
//       {/* <Hooks1/> */}
//       {/* <Hooks2/> */}
//       {/* <Project/> */}
//       {/* <Useref/> */}
//       <Routing/>
//     </div>
//   )
// }

// export default App
