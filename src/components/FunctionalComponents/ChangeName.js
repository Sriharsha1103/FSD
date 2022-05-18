import React, { useEffect, useState } from "react";
function ChangeName1() {
    const [text,setText] = useState('Welcome to ')
    const [input,setInput] = useState('')

    useEffect(()=>{
        console.log('in useEffect Hook')
        setTimeout(()=>{
              setText(`Welcome : ${input}`)
              console.log('Set Timeout Functional Compoennt')
        },2000);
    },[])
  return (
    <div>
        <input type='text' onChange={(e)=> setInput(e.target.value)}/>
      <h2>{text}</h2>
    </div>
  );
}
export default ChangeName1
