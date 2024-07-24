import React, { useState } from 'react';
import './Contact.css'; // Ensure you have a CSS file for styling

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or email)
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact">
      <section id="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
      </section>
      
      <section id="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Message:
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              required 
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <section id="map">
        <h2>Find Us on Google Maps</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a315c5c0e4f%3A0x1e7f9f0e8e0b8c7!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1623988665673!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
