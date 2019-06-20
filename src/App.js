import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail';

//import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path='/AddProject' component={AddProject}/>
          <Route exact path='/ProjectList' component={ProjectList}/>
          <Route exact path='/ProjectList/:id' component={ProjectDetail}/>
        </Switch>


      </div>
    );
  }
}

export default App;
