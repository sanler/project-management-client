import React, { Component } from 'react';
import axios from 'axios';
import { Link } from  'react-router-dom';
import AddProject from './AddProject';



class ProjectList extends Component{

    constructor(props){
        super(props);
    
      this.state={
        myprojects:[]
        }
    }

    getAllProjects=()=>{ 
        axios.get("http://localhost:5000/api/projects")
    .then(response => {
        this.setState({myprojects: response.data})
        console.log(response.data);
    })
}

    componentDidMount() {
        console.log('HHHHHHHHHHH');
        this.getAllProjects();
    }

    render(){
        return(
            <div>
        <div>
            <AddProject getData={() => this.getAllProjects()}/> {/* <== !!! */}
        </div>        <div>
        {this.state.myprojects.map((oneproject, index) =>{
            return(
            <div key={index} className="card">
               
                <div className="card-body beer-card">
                
                <div>
                    <h1><Link to={`/ProjectList/${oneproject._id}`}>{oneproject.title}</Link></h1>
                    {/* 🥁 added so the tasks can be displayed:  🥁 */}
                    <ul>
                  { oneproject.tasks.map((task, index) => {
                    return <li key={index}><Link to={`/ProjectList/${oneproject._id}`}>{task.title}</Link></li>
                  }) }
                </ul>  

                   
                    <h6><b>Description:</b>{oneproject.description}</h6>
                </div>
                </div>
            </div>
         );
       })}
       </div>   </div>     
        );


    }

}

export default ProjectList;