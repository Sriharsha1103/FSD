import './App.css';
import React, { createContext } from 'react'
import Child1 from './components/LiftingState/Child1';
import Child2 from './components/LiftingState/Child2';
import ContextDemo from './components/ClassComponents/ContextDemo';


export const MyContext = createContext()
const App = () => {
  return (
    <div className='App'>
      <MyContext.Provider value='Sri Harsha'>
        <Child1 />
        <Child2 />
        <ContextDemo />
      </MyContext.Provider>
    </div>
  )
}

export default App
