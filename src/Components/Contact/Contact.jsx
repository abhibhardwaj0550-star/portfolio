import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

import { toast } from 'react-toastify';

const Contact = () => {

  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);

    // Add Web3Forms Access Key
    formData.append("access_key", "84e14413-8695-4cc4-a829-d7acaf2bee47");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for Submission!')
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1> Get In Touch </h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I’m open to new projects and collaborations. If you have an idea or need help building something, feel free to contact me.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>abhibhardwaj0550@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>7876728051</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>3b2 Mohali</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder='Enter your name'
            name='name'
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder='Enter your email'
            name='email'
            required
          />

          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder='Enter your message'
            required
            minLength={5}
          ></textarea>

          <button type='submit' className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
