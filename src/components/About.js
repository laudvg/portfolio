import React from 'react'
import '../styles/about.css'


function About() {
  return (
    <div>
      <div className="about">
        <div>
          <h1>Me</h1>
          <div className="buttons">
            <a className="button" target="_blank" href="https://www.linkedin.com/in/lauravivasgamboa/">LinkedIn</a>
            <a className="button" target="_blank" href="https://drive.google.com/file/d/1pgr_mHc6z5pnqHx6z8-7j6hYrenM92w8/view?usp=sharing">CV</a>
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
