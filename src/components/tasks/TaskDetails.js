import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class TaskDetails extends Component {
  constructor(props){
      super(props);
      console.log('+++++++++++++++++++++++++++++++++++TASKDETAILS');
      this.state = {};
  }

  componentDidMount(){
    console.log('GETSINGLETAAAAAAASK¿¿¿¿¿??????');

      this.getSingleTask();
  }

  getSingleTask = () => {
      const { params } = this.props.match;
      console.log('GETSINGLETAAAAAAASK');
      axios.get(`http://localhost:5000/api/projects/${params.id}/tasks/${params.taskId}`) 
      .then( responseFromApi =>{
          const theTask = responseFromApi.data;
          console.log('THETASKKKK'+theTask);
          this.setState(theTask);
      })
      .catch((err)=>{
          console.log(err)
      })
  }




// DELETE PROJECT:
deleteTask = () => {
  const { params } = this.props.match;
  const  proyect_Id = this.props.location.state;
console.log('??????????????????????????'+JSON.stringify(this.props.location.state));
console.log('??????????????????????????'+proyect_Id.theprojectId);

  console.log(`=================${params.taskId}========${params.id}`);

  axios.delete(`http://localhost:5000/api/tasks/${params.taskId}`)
  .then( () =>{
      this.props.history.push(`/ProjectList/${proyect_Id.theprojectId}`); // !!!         
  })
  .catch((err)=>{
      console.log(err)
  })
}



render(){
  return(

    <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.description}</p>

      <button onClick={() => this.deleteTask()}>Delete Task</button> {/* <== !!! */}
      <br/>
      <br/><br/><br/><br/><br/>
      <Link to={'/ProjectList'}>Back to projects</Link>
    </div>
  )
}
}

export default TaskDetails;