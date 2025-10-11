import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-top">
                <h1> ♕𝓐𝓑𝓗𝓘</h1>
                <img src={theme_pattern} alt="" />
            </div>


            <div className="footer-top-right">
                <p>I'm currently available to take on new projects, so feel to send me a message that you want me to work on . You can contact anytime.</p>

                <div className="footer-email-input">

                    <img src={mail_icon} alt="" /><p>abhineshbhardwaj7@gmail.com</p>
                </div>
                <div className="contact-detail-footer">
                    <img src={call_icon} alt="" /><p>7876728051</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>2025 Abhinesh Bhardwaj.  All rights reserved </p>
                <div className="footer-bottom-right">
                    <p> Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect With me</p>
                </div>
            </div>
        </div>




    )
}

export default Footer