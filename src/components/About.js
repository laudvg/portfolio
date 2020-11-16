import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink,Redirect } from "react-router-dom";
import '../styles/about.css'


function About() {
  return (
    <div>
      <div className="about">
        <div>
          <h1>Me</h1>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/lauravivasgamboa/"><button>LinkedIn</button></a>
            <a target="_blank" href="https://drive.google.com/file/d/1_jrvPB7KUs-0JTcLZsK4RgDv5HYhyZ9r/view?usp=sharing"><button>CV</button></a>
          </div>
        </div>

        <div className="description">
          <h2>
            I'm passionate about developing and designing functional tools that improve
            people’s quality of life. Open to change,
            creative, able to bring new solutions
            and innovate.
          </h2>
          <h2>
            Interested in technology, design and art.
          </h2>
          <h2>
            I love music and make a lot of spotify playlists.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About
