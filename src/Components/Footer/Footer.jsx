import './Footer.css'
import theme_pattern from '../../assets/pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import instagram_icon from '../../assets/instagram.png'
import linkedin_icon from '../../assets/linkedin.png'
import whatsapp_icon from '../../assets/whatsapp.png'
import Github_icon from '../../assets/Github.png'


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
                    <img src={mail_icon} alt="" /><p>abhibhardwaj0550@gmail.com</p>
                </div>

                <div className="contact-detail-footer">
                    <img src={call_icon} alt="" /><p>7876728051</p>
                </div>
            </div>

            <hr />
            <div className="footer-bottom">

                <div className="footer-bottom-left">
                    2025 Abhinesh Bhardwaj. All rights reserved | Open to Opportunities | Connect With Me
                </div>

                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/abhi_bhardwaj_51/" target="_blank">
                        <img src={instagram_icon} alt="instagram" />
                    </a>

                    <a href="https://www.linkedin.com/in/abhinesh-bhardwaj-41ba03383/" target="_blank">
                        <img src={linkedin_icon} alt="linkedin" />
                    </a>

                    <a href="https://github.com/abhibhardwaj0550-star" target="_blank">
                        <img src={Github_icon} alt="Github" />
                    </a>

                    <a href="https://wa.me/917876728051" target="_blank">
                        <img src={whatsapp_icon} alt="whatsapp" />
                    </a>
                </div>

            </div>
        </div>

    )
}

export default Footer
