import React from 'react'
import '../styles/about.css'


function About() {
  return (
    <div>
      <div className="about">
        <div>
          <h1>Me</h1>
          <div>
            <button>LinkedIn</button>
            <button>CV</button>
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
