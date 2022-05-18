import React, { Component } from 'react'
import Child from './Child';
import ChildFunctionalComponent from './ChildFunctionalComponent';

const data = [
    { id: 1, name: "Ramesh" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Rajesh" },
    { id: 4, name: "Ramu" },
    { id: 5, name: "Arun" },
    { id: 6, name: "Abhi" },
    { id: 7, name: "Varun" },
    { id: 8, name: "Kumar" },
    { id: 9, name: "Raj" },
    { id: 10, name: "Niranjan" },
  ];
export class Parent extends Component {
  render() {
    return (<div>
        <h1>Class Component</h1>
        <Child data={data} />
        <h1>Functional Component</h1>
        <ChildFunctionalComponent data={data} />
    </div>
    )
  }
}

export default Parent