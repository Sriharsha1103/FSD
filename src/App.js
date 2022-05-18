import './App.css';
import React from 'react'
import MyClock from './components/ClassComponents/MyClock';
import MyClock1 from './components/FunctionalComponents/MyClock1';


const App = () => {
  return (
    <div className='App'>
      <MyClock />
      <MyClock1 />
    </div>
  )
}

export default App
