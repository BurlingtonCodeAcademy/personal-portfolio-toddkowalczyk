import React from 'react'
import ipad from '../images/ipad.webp'
import pmp from '../images/pmp-graphic.png'
import leadership from '../images/leadership.webp'

function Home() {
  return (
    <div>
      <div id="intro-container">
        <p id="tagline">Hi.  I'm Todd, an IT professional with 35+ years of experience as a Project Manager and Software Developer.  I love using technology and software to make people happier!</p>
      </div>
      <div id="image-container">
        <div>
          <img class="home-image" src={leadership} alt="Leadership" />
          <p class="sub-desc">20 years of experience as an IT Leader, helping organizations and teams successfully reach their goals</p>
        </div>
        <div>
          <img class="home-image" src={ipad} alt="iPad" />
          <p class="sub-desc">Successful track record in a diverse set of industries including retail, insurance and energy sectors</p>
        </div>
        <div>
          <img class="home-image" src={pmp} alt="Project Management Professional" />
          <p class="sub-desc">Experienced PM who know how to help teams get stuff done</p>
        </div>
      </div>
    </div >
  )
}

export default Home
