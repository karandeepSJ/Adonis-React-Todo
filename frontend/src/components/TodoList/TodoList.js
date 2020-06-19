import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TodoItem from './TodoItem';
import axios from 'axios';
import {
  MDBCard,
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBBtn
} from "mdbreact";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      'items':[]
    }
    this.delete = this.delete.bind(this)
    this.mark_complete = this.mark_complete.bind(this)
  }

  componentDidMount() {
      axios.get('http://127.0.0.1:3333/api/todo')
      .then(response => {
        this.setState({'items':response.data})
      })
  }

  delete (e) {
    let idx = e.target.dataset.id;
    axios.delete("http://127.0.0.1:3333/api/todo/" + e.target.dataset.db_id)
    .then(response => {
      let tempstate = this.state.items;
      tempstate.splice(idx, 1);
      this.setState({
        items: tempstate
      });
    })
  }

  mark_complete (e) {
    let idx = e.target.dataset.id;
    axios.put("http://127.0.0.1:3333/api/todo/" + e.target.dataset.db_id)
    .then(response => {
      let tempstate = this.state.items;
      tempstate[idx] = response.data;
      this.setState({
        items: tempstate
      });
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBCard>
          <MDBListGroup>
            {this.state.items.map((item,idx) => {
              return (
                <MDBListGroupItem key={idx}>
                  <TodoItem task={item} idx={idx} onDelete={this.delete}  onComplete={this.mark_complete}/>
                </MDBListGroupItem>
              )
            })}
          </MDBListGroup>
        </MDBCard>
        <Link to="/add">
          <MDBBtn color="primary">
            Add a Task
          </MDBBtn>
        </Link>
      </MDBContainer>
    )
  }
}
