import React, { useEffect, useState } from 'react'

function UseEffectHookDemo() {
    const [count,setCount] = useState(0)
    const [count2,setCount2]=useState(0)
useEffect(()=>{
    console.log(`You have Clicked button ${count} times`)
},[count])
  return (
    <div>
        <button onClick={()=>{
            setCount(count + 1)
        }}> Click Me Once</button>
        <button onClick={()=>{
            setCount2(count2 + 1)
        }}> Click Me Twice</button>
    </div>
  )
}

export default UseEffectHookDemo