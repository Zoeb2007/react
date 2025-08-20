import React, { useRef, useState } from 'react'

const Useref = () => {
    const [count,setCount]=useState(0)
    const ref=useRef()
    const start=()=>{
        ref.current=setInterval(() => {
            setCount(prev=>prev+1)
        }, 1000);
    }
    const stop=()=>clearInterval(ref.current)

  return (
    <div>
        <button onClick={start}> Start </button>
        <button onClick={stop}> Stop </button>
    </div>
  )
}

export default Useref