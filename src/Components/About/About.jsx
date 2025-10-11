import React from 'react'
import './About.css'
import theme_pattern from '../../assets/pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a experienced Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. Eager to build user-friendly and responsive web applications while continuously learning modern frameworks like React</p>
            <p>Enthusiastic Frontend Developer (Fresher) skilled in creating clean, responsive, and visually appealing web designs. Excited to contribute to real-world projects and grow in a collaborative environment.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3</h1>
          <p>PROJECTS COMPLETED </p>
        </div>
        <hr />


      </div>
    </div>
  )
}

export default About