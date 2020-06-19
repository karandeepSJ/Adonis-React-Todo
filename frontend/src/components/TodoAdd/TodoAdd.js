import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import {
  MDBContainer,
  MDBLink,
  MDBInput,
  MDBBtn
} from 'mdbreact';

export default class TodoAdd extends Component {
  constructor() {
    super();
    this.state = {}
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.dateSelectHandler = this.dateSelectHandler.bind(this)
  }

  submitHandler(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    var data = new URLSearchParams();
    if(!this.state.title || !this.state.priority)
    {
      return ;
    }
    else
    {
      data.title = this.state.title;
      data.description = this.state.description;
      data.priority = this.state.priority;
      data.complete_by = this.state.complete_by;

      axios.post('http://127.0.0.1:3333/api/todo',{data})
      .then(response =>{
        this.props.history.push('/')
      })
    }
  }

  changeHandler(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  dateSelectHandler(date) {
    this.setState({'complete_by':date})
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBLink to='/' style={{'display':'unset'}}>
            <i
              className="fas fa-arrow-left pr-2"
            >
            </i>
            View all tasks
          </MDBLink>
        </MDBContainer>
        <MDBContainer>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate>
            <MDBInput
              outline
              required
              label="Title"
              name="title"
              onChange={this.changeHandler}
              type="text"
            >
              <div className="invalid-feedback">Please enter a title</div>
            </MDBInput>
            <MDBInput
              outline
              label="Description"
              name="description"
              onChange={this.changeHandler}
              type="textarea"
            >
            </MDBInput>
            <div className="row">
              <div className="col-6">
                <DatePicker
                  selected={this.state.complete_by}
                  placeholderText="Select the deadline"
                  minDate={new Date()}
                  showMonthDropdown
                  useShortMonthInDropdown
                  required
                  name="complete_by"
                  onChange={this.dateSelectHandler}
                  className='w-100'>
                </DatePicker>
              </div>
              <div className="col-6">
                <select
                  required
                  className="browser-default custom-select"
                  onChange={this.changeHandler}
                  name="priority">
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Normal">Normal</option>
                  <option value="Low">Low</option>
                  <div className="invalid-feedback">Please select a priority</div>
                </select>
              </div>
            </div>
            <MDBBtn color="success" size="sm" type="submit">
              Submit
            </MDBBtn>
          </form>
        </MDBContainer>
      </div>
    )
  }
}
