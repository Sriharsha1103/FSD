import React, { Component } from 'react'
import EmailComponent from './EmailComponent'

export class UserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName : '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        console.log(event.target.value)
        return this.setState({userName : event.target.value})
        
    }
  render() {
    return (
      <div>
          <input type="text" 
          value={this.state.userName}
          onChange={this.handleChange}/>
          <EmailComponent userName={this.state.userName}/>
      </div>
    )
  }
}

export default UserComponent