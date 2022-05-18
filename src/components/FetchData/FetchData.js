import React, { Component } from "react";
import Child from "../StatelessComponents/Child";

export class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ data: result });
      });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Child data={this.state.data} />
      </div>
    );
  }
}

export default FetchData;
