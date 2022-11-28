import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <h2 className='aboutheader'>About</h2>
        <p className='abouttext'>
            I am a frontend developer with a particular interest in web apps. My goals is always to keep up with security
            and best practices. As a developer I am constantly adapting and learning the latest trends.
        </p>
        <h2 className='aboutheader'>Interests</h2>
        <p className='abouttext'>
            Sports fanatics. Maths enthusiast. Lover of comedy and political satires.
            Good movies are always on my list of todos. An avid runner.
        </p>
    </div>
  )
}

export default About