import React, {Component} from 'react';
import { MDBBadge } from "mdbreact";

export default class TodoList extends Component {
  render() {
    let color;
    switch (this.props.type) {
      case "High":
        color="danger"; break;
      case "Normal":
        color="warning"; break;
      case "Low":
        color="success"; break;

    }
    return (
        <MDBBadge color={color}>
            {this.props.type}
        </MDBBadge>
    )
  }
}
