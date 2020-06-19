import React from 'react';
import TodoList from './components/TodoList/TodoList'
import TodoAdd from './components/TodoAdd/TodoAdd'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { MDBTypography } from 'mdbreact'

function App() {
  return (
    <div>
      <MDBTypography tag='h1' className="font-weight-bolder text-center py-4"> TODO </MDBTypography>
      <hr/>
      <BrowserRouter>
        <Switch>
          <Route path="/add" component={TodoAdd} />
          <Route path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
