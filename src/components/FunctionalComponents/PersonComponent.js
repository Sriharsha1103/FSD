import React, {useState} from 'react'
//Hook
function PersonComponent() {
    const [userText, setUserText] = useState('Harsha')
    const [resultText,setResultText] = useState('')
    const handleChange = (e) => {
        setUserText(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setResultText(userText)
    }
  return (
    <div style={{margin: '10px', padding: '5px'}}>
        <input type='text' 
        onChange={handleChange}
        placeholder='Enter some text' value={userText} /><br/>
        <button onClick={handleClick}>Click Me</button>
        <br/>
        <h3>Result: {resultText}</h3>
    </div>
  )
}
export default PersonComponent