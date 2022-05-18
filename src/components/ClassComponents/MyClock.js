import React, { Component } from 'react'

export class MyClock extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         clock: new Date(),
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({clock: new Date()})
        },1000)
    }

    componentWillUnmount(){
        clearInterval()
    }

  render() {
    return (
      <div>
         {this.state.clock.toLocaleString()}
      </div>
    )
  }
}

export default MyClock