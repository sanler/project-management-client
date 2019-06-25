import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail';
import TaskDetails from './components/tasks/TaskDetails';

//import axios from 'axios';
//<Route path="/ProjectList/:id/tasks/:taskId" component={TaskDetails} />

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
        <Route path="/tasks/:taskId" component={TaskDetails} />
          <Route exact path='/AddProject' component={AddProject}/>
          <Route  path='/ProjectList/:id' component={ProjectDetail}/>
          <Route  path='/ProjectList' component={ProjectList}/>


        </Switch>


      </div>
    );
  }
}

export default App;
