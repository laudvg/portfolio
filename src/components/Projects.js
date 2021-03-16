
import React, { Component } from 'react';
import UseProject from './Project';

import {projects} from '../project-img/projects'

class Projects extends Component {


  render(){

   return (
      <div>
        {projects.map(project => { return (<UseProject  {...project} key={project.id} />) })}
 
      </div>
      
    )
  }

}

export default Projects;

