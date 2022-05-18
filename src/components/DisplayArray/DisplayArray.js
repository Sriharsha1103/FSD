import React, { Component } from "react";
import './myStyles.css'

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

export class DisplayArray extends Component {
  render() {
    return (
      <div>
        <div className="container">DisplayArray</div>
        <table border="1">
          <tr>
            <td>
              <b>S.No.</b>
            </td>
            <td>
              <b>Name</b>
            </td>
          </tr>

          {data.map(function (item, index) {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default DisplayArray;
