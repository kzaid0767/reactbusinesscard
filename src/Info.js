import React from 'react'
import me from './images/passportpic.jpg'
import './Info.css'

function Info() {
    return (
        <div className='info'>
            <img src={me} className='picofme' alt='pic of Kassim' />
            <h1 className='name'>Kassim Zaid</h1>
            <p className='mytitle'>Frontend Developer</p>
            <a className='websitelink' href={'http://www.kassimthefrontendev.com'} rel="noreferrer" 
                target={'_blank'}>kassimthefrontendev.com</a>
            <div className='buttons-holder'>
                <button className='allbuttons buttonemail'><i class="fa fa-envelope" aria-hidden="true"></i>  Email</button>
            </div>
        </div>
    )
}

export default Info