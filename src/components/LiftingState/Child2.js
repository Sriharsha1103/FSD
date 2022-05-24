import React, { useState } from "react";

function Child2(props) {
    const [text,setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }
    
  return (
    <div>
      <input type="text" 
      placeholder='Enter some text' 
      value={text}
      onChange={handleChange}/>
      <button onClick ={e=>props.click(text)}>Click Me</button>
    </div>
  );
}

export default Child2;
