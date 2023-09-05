import React, { useState } from "react";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.sendForm("default_service", templateId, e.target, userId).then(
      (response) => {
        console.log("Email sent successfully:", response);
        setFormData({ name: "", email: "", message: "" });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      },
      (error) => {
        console.error("Email could not be sent:", error);
      }
    );
  };

  return (
    <div className="contact-container">
      {isSuccess ? (
        <div className="success-message">Successfully sent!</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      )}
      <Footer />
    </div>
  );
}

export default Contact;
