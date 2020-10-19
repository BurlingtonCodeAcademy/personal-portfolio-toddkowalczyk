import React, { useState } from 'react'
import Toddkpic from '../images/toddkpic-cutout.png'

function About() {

    return (
        <div>
            <img id="my-pic" src={Toddkpic} alt='Todd Kowalczyk' />
            <p id='about-intro'> A little about me...</p>
            <ul class="who-items">
                <li>Disovered the IT technologist in me at the tender age of 12 on a TRS-80 at Radio Shack.</li>
                <li>I am fascinated with technology.  It never gets old because we keep building new, cooler stuff!</li>
                <li>Spent the first 18 years of my career as a  Developer</li>
                <li>Then wandered over to the dark side... Project Management </li>
                <li> In my free time, you can usually find me spending time with my three daughters or out on a trail running or skiing.</li>
            </ul>
        </div>

    )
}

export default About
