import React from 'react'
import '../styles/home.css'
import laura from '../img/laura.png'

function Home() {
  return (
    <div className="home-b">
      <div className="hello-block">
          <h1 className="hello">Hello!</h1>
          <h2>I'm<br/>Laura</h2>
      </div>
      <div className="pro-block">
        <img class="profile_pic" src={laura} alt="Laura"/>
        <h2 className="profesion">and I am a <br/> Web Developer</h2>
      </div>
    </div>
  )
}

export default Home
