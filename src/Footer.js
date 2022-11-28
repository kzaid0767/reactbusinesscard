import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <a href={'https://twitter.com/kassimfrontend'}
        rel="noreferrer" target={'_blank'}><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href={'https://www.facebook.com/profile.php?id=100086839685028'}
        rel="noreferrer" target={'_blank'}><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
        <a href={'tel:+14704940768'}><i class="fa fa-phone-square" aria-hidden="true"></i></a>
        <a href={'https://github.com/kzaid0767'}
        rel="noreferrer" target={'_blank'}><i class="fa fa-github-square" aria-hidden="true"></i></a>
    </div>
  )
}

export default Footer