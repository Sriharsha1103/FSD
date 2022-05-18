import React, { Component } from "react";

export class ChangeColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'black',
      backgroundColor:'white',
      isToggleOn: 'false'
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
      this.setState({isToggleOn: !this.state.isToggleOn})
      switch(this.state.color){
         case 'black': this.setState({color:'white',backgroundColor:'black'})

         break;
         default: this.setState({color:'black',backgroundColor:'white'})
        
      }
  }
  render() {
    return (
      <div>
        <button style={{ color: this.state.color, backgroundColor: this.state.backgroundColor }}
        onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ChangeColor;
