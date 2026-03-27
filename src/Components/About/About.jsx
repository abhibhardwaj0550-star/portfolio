import React from 'react'
import './About.css'
import theme_pattern from '../../assets/pattern.svg'
import profile_img from '../../assets/profile1.jpeg'

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
            <p>I am a motivated MERN Stack Developer with hands-on experience in building web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. I have completed 6 months of professional training in full-stack development, where I worked on real-world projects and strengthened my practical skills.</p>

            <p>I hold a Bachelor of Computer Applications (BCA) from Government PG College, Una, and a Diploma in Computer Applications (DCA), which helped me build strong fundamentals in computer applications and programming.</p>

            <p>I am passionate about learning new technologies, improving my development skills, and looking for an opportunity to start my career as a full-stack developer where I can contribute and grow.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Next JS, Express js</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{ width: "75%" }} /></div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <hr />
        <div className="about-achievement">
          <h1>6</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6</h1>
          <p>PROJECTS COMPLETED </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>Working Projects </p>
        </div>
        <hr />

      </div>
    </div>
  )
}

export default About