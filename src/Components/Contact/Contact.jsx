import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
<h1> Get In Touch </h1>
<img src={theme_pattern} alt="" />
</div>

<div className="contact-section">
    <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currently available to take on new projects, so feel to send me a message that you want me to work on . You can contact anytime.  </p>
  <div className="contact-details">
    <div className="contact-detail">
<img src={mail_icon} alt="" /><p>abhineshbhardwaj7@gmail.com</p>
    </div>
       <div className="contact-detail">
        <img src={call_icon} alt="" /><p>7876728051</p>
    </div>
       <div className="contact-detail">
        <img src={location_icon} alt="" /><p>3b2 Mohali</p>
    </div>
  </div>
    </div>
    <form className="contact-right">
        <label htmlFor= "">Your Name</label>
        <input type="text" placeholder='Enter your name'name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email'name='email' />
 <label htmlFor="">Write your message</label>
<textarea name="message" rows="8" placeholder='Enter your message'></textarea>

<button type='submit' className="contact-submit">Submit</button>


    </form>
</div>

    </div>
  )
}

export default Contact