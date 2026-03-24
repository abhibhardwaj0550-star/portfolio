import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false); // Loader State

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start loader

    try {
      const res = await fetch("http://localhost:5000/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      alert("Server error! Check backend.");
      console.log(error);
    }

    setLoading(false); 
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
          <p>I'm currently available to take on new projects, so feel to send me a message that you want me to work on.</p>

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

        <form className="contact-right" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
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
