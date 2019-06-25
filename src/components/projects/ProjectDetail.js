import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProject from './EditProject';
import AddTask from '../tasks/AddTask';


class ProjectDetail extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleProject();
  }

  getSingleProject = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/projects/${params.id}`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          console.log(theProject);
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleProject();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditProject theProject={this.state} getTheProject={this.getSingleProject} {...this.props} />
        
    }
  }



// DELETE PROJECT:
deleteProject = () => {
  const { params } = this.props.match;
  axios.delete(`http://localhost:5000/api/projects/${params.id}`)
  .then( () =>{
      this.props.history.push('/ProjectList'); // !!!         
  })
  .catch((err)=>{
      console.log(err)
  })
}


 
renderAddTaskForm = () => {

  if(!this.state.title){
      this.getSingleProject();
    } else {     
              // pass the project and method getSingleProject() as a props down to AddTask component
      return <AddTask theProject={this.state} getTheProject={this.getSingleProject} />
    }
}

render(){
  return(

    <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.description}</p>
      {/* show the task heading only if there are tasks */}
      { this.state.tasks && this.state.tasks.length > 0 && <h3>Tasks </h3> }
      {/* map through the array of tasks and... */}
      { this.state.tasks && this.state.tasks.map((task, index) => {
          return(
              <div key={ index }>
              {/* ... make each task's title a link that goes to the task details page */}
                  <Link    to={{
                    pathname: `/tasks/${task._id}`,
                    state: {
                      theprojectId: this.state._id
                    }
                  }} > 
               
                      { task.title }
                  </Link>
              </div>
          )
          
      }) }
      <div>{this.renderEditForm()} </div>
      <div>{this.renderAddTaskForm()} </div>
      <button onClick={() => this.deleteProject()}>Delete project</button> {/* <== !!! */}
      <br/>
      <br/><br/><br/><br/><br/>
      <Link to={'/ProjectList'}>Back to projects</Link>
    </div>
  )
}
}

export default ProjectDetail;