import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";

function Child1(props) {
    const [text,setText] = useState(props.value)
    const name = useContext(MyContext)
    useEffect(()=>{
        setText(props.value)
    },[props.value])
  return (
    <div>
      <input type="text" placeholder="Some Text" value={name}/>
    </div>
  );
}

export default Child1;
