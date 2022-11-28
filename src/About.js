import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <h2 className='aboutheader'>About</h2>
        <p className='abouttext'>
            I am a frontend developer with a particular interest in making things 
            simple and automating daily tasks. I try to keep up with security and best practices, and am 
            always looking for new things to learn.
        </p>
        <h2 className='aboutheader'>Interests</h2>
        <p className='abouttext'>
            Food expert. Music scholar. Reader. Internet fanatic. 
            Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
    </div>
  )
}

export default About