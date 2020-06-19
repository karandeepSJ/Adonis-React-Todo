import React, {Component} from 'react';
import axios from "axios";
import {
  MDBBtn,
  MDBCollapse
} from 'mdbreact';
import PriorityBadge from '../PriorityBadge/PriorityBadge';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    }
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  renderText(txt) {
    if (this.props.task.completed) {
      return (
        <span style={{'textDecoration':'line-through'}}>
          {txt}
        </span>
      )
    }
    else {
      return (
        txt
      )
    }
  }

  render() {
    return (
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className="h5-responsive">
            <a onClick={this.toggleCollapse("desc_collapse")}>
              {this.renderText(this.props.task.title)}
              <i className="fas fa-angle-down pl-2"></i>
            </a>
          </div>
          <div>
            <i className="far fa-calendar-alt pr-2">
            </i>
            {this.props.task.complete_by.split('T')[0]}
          </div>
          <div>
            <PriorityBadge type={this.props.task.priority}></PriorityBadge>
            <MDBBtn
              color="danger"
              size="sm"
              data-id={this.props.idx}
              data-db_id={this.props.task.id}
              onClick={this.props.onDelete}>Delete</MDBBtn>
            {!this.props.task.completed &&
              <MDBBtn
                color="primary"
                size="sm"
                data-id={this.props.idx}
                data-db_id={this.props.task.id}
                onClick={this.props.onComplete}>Mark as Done</MDBBtn>
            }
          </div>
        </div>
        <MDBCollapse id="desc_collapse" isOpen={this.state.collapseID}>
          <p>{this.renderText(this.props.task.description)}</p>
        </MDBCollapse>
    </div>
    )
  }
}
