
import React, { Component } from 'react';
import UseProject from './Project';

import {projects} from '../project-img/projects'

class Projects extends Component {


  render(){

   return (
      <div>
        hola
        {projects.map(project => { return (<UseProject  {...project} key={project.id} />) })}
 
      </div>
      
    )
  }

}


// import React from 'react';
// import UseProject from './Project';
// import Data from '../project-img/projects.json'
// import '../styles/project.css'




// function UseProjectsFetch(data) {
//   const [projects, setProject] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     setIsLoading(true);
//     fetch(data)
//       .then(res => {
//         if (res.ok) {
//           return res.text();
//         } else {
//           throw Error("Error loading project")
//         }
//       })
//       .then(projects => {
//         setProject(projects);
//         setIsLoading(false);
//       })
//       .catch(error => {
//         setError(error)
//       })

//   }, [data])

//   return { projects, isLoading, error }
// }

// function UseProjects() {
  
//   const { projects, isLoading, error } = UseProjectsFetch(Data)
//   if (error) {
//     return <p style={{ color: 'red' }}>{error.message}</p>
//   }
  
//   if (isLoading) {
//     return <p>Loading projects...</p>
//   }
  
//   console.log(projects);
//   return (
//     <div className="projects">
//       {/* {projects.map(project => { return (<UseProject  {...project} key={project.id} />) })} */}
//     </div>
//   )
// }

// export default UseProjects;


// import React from 'react';
// import UseProject from './Project';
// import Data from '../project-img/projects.json'
// import '../styles/project.css'

// function UseProjects(){
//   console.log(Data)

//   return (
//       <div className="projects"> 
//         {Data.map(project => {return (<UseProject  {...project} key={project.id} />)})}
//       </div>
//   )

// }

export default Projects;

