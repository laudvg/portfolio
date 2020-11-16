import React from 'react';
import UseProject from './Project';
import Data from '../project-img/projects.json'
import '../styles/project.css'

// import ErrorComponent from './Error';
// import Loading from './Loading';

const UseProjects = () => {
  // const { loading, error, data } = useQuery(GET_USER);

  // if (loading) return <Loading />;
  // if (error) return <ErrorComponent />;

  return (
    <div className="projects">
      <UseProject/>
    </div>
  )

}

export default UseProjects;