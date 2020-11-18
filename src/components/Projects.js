import React from 'react';
import UseProject from './Project';
import Data from '../project-img/projects.json'
import '../styles/project.css'

function UseProjects(){
  console.log(Data)

  return (
      <div className="projects"> 
        {Data.map(project => {return (<UseProject  {...project} key={project.id} />)})}
      </div>
  )
  
}

export default UseProjects;

