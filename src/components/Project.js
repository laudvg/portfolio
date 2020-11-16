import React from 'react';
import Data from '../project-img/projects.json'
import laura from '../project-img/burguer_portada.png'
import '../styles/project.css'

// import ErrorComponent from './Error';
// import Loading from './Loading';

const UseProject = () => {
  // const { loading, error, data } = useQuery(GET_USER);

  // if (loading) return <Loading />;
  // if (error) return <ErrorComponent />;

  return (
    <div>
      <div>
        {Data.map(project => {
          return(
            <div>
              <div className="project">
                <h2 className="title">{project.tittle}</h2>
                <img className="project_pic" src={laura} alt="Projectpic" />
                <h4>{project.descriptionTitle}</h4>
                <h6>{project.description}</h6>
                <div className="buttons">
                  <a className="butt" target="_blank" href={project.link}>See it</a>
                  <a className="butt" target="_blank" href={project.repo}>Repo</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default UseProject;
