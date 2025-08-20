import React, { useState } from 'react'

const Hooks2 = () => {
    const [user,setUser1]=useState(0)
    const change =()=>{
setUser1(prev=>prev-1)
    }
    const change2=()=>{
      setUser1(prev=>prev+1)
    }
  return (
    <div className='text-[20px]'>{user}
    <br />
        <button onClick={change}>Decriment</button>
        <br />
        <button onClick={change2}>Incriment</button>
    </div>
  )
}

export default Hooks2