import React, { Component } from "react";
import { MyContext } from "../../App";

export class ContextDemo extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => 
          <div> Name : {value} </div>
        }
      </MyContext.Consumer>
    );
  }
}
export default ContextDemo;
