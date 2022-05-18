import React, { Component } from "react";

class ChangeName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }
  componentDidMount(){
      console.log('In Component Did Mount')
      setTimeout(()=>{
            this.setState({text: 'Welcome to React JS'})
            console.log('Set Timeout')
      },5000);
      
  }


  render() {
    return <div id='myBlock'>
        <h1>{this.state.text}</h1>
    </div>;
  }
}
export default ChangeName; 