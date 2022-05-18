import React, { Component } from "react";
import "./myStyles.css";
export class Mounting extends Component {
  
  constructor(props) {
    super(props);
    console.log("In Constructor function");
    this.state = {
      color: "gray",
      backgroundColor: "black",
    };
  }

  static getDerivedStateFromProps(props, state){
    return {color: props.color}
  }

  render() {
    return (
      <div
        className="container box"
        style={{
          color: this.state.color,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        constructor()
      </div>
    );
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({backgroundColor: 'pink'})
    },5000)
  }
}

export default Mounting;
