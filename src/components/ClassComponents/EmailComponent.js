import React, { Component } from 'react'
import './LifeCycle/myStyles.css'
export class EmailComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         email: '',
      }

    }
    static getDerivedStateFromProps(props,state){
        return state.name = props.userName
    }
    handleChange = (e) => {
        this.setState({email: e.target.value})
    }
  render() {
    return (
      <div>
          <input type="text" placeholder='Enter Email'
          value={this.state.email}
          onChange={this.handleChange}/>
          <h1>Username:{this.state.name}</h1>
          <h3>Email:{this.state.email}</h3>
      </div>
    )
  }
}

export default EmailComponent