import React, { useState } from 'react';
import '../styles/project.css'

function UseProject({tittle, descriptionTitle, description, link, repo, img}){

  return (
    <div className="project">
      <div className ="first">
        <h2 className="tittle">{tittle}</h2>
        <div className="buttons">
          <a className="butt" target="_blank" href={link}>See it</a>
          <a className="butt" target="_blank" href={repo}>Repo</a>
        </div>
      </div>
      <div className ="second">
        <img className="project_pic" src={img} alt="Projectpic" />
        <h4>{descriptionTitle}</h4>
        <h6>{description}</h6>
      </div>
    </div>
  )
}

export default UseProject;