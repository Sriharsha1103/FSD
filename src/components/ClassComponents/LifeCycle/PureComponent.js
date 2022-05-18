import React, { PureComponent } from 'react'

export class PureComponentDemo extends PureComponent {
    constructor(props) {
      super(props)
    
      console.log('In constructor Pure Component')
    }
  render() {
    return (
      <div>
          <h2>Pure Component</h2>
      </div>
    )
  }
}

export default PureComponentDemo