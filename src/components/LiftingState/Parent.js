import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    const [result,setResult] = useState('')
    const handleClick = (value) => {
        console.log(value);
        setResult(value)
    }
  return (
    <div>
        <Child1 value={result} />
        <Child2 click ={handleClick}/>
    </div>
  )
}

export default Parent