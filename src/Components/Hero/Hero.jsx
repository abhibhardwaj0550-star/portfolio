import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (

        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
           <h1><span>I'm Abhinesh Bhardwaj </span> a MERN Stack Developer based in India.</h1>
<p>I build responsive and user-friendly web applications using React, Node.js, Express, and MongoDB.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
                <div
                    className="hero-resume"
                    onClick={() => window.open("/Abhinesh.pdf", "_blank")}
                >
                    My resume
                </div>
            </div>
        </div>
    )
}

export default Hero