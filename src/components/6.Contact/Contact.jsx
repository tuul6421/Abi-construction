import emailjs from "emailjs-com";
import "./Contact.css";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt
} from "react-icons/fa";  
import React, { useRef, useState } from "react";


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_jzown0q", // таны SERVICE ID
        "template_rjd4lpj", // таны TEMPLATE ID
        form.current,
        "EhZlq6Vmw22FanoBj" // таны PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("EmailJS Success", result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error", error);
          setStatus(
            `Failed to send message. ${
              error?.text ? `Details: ${error.text}` : "Please try again."
            }`
          );
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="Contact">
      <div className="contact_container">
        <h2 className="contact_title">Contact Us</h2>
        <p className="contact_description">
          We'd love to hear from you! Whether you have questions about our
          services, want to discuss a project, or just want to say hello, feel
          free to reach out.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="contact_status">{status}</p>}

        <div className="contact_details">
          <p>Email: contact@abi-construction.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 1234 Builder's Lane, Construct City, ST 56789</p>
        </div>

        <div className="contact_info">
          <h3>Company Information</h3>
          <p><FaMapMarkerAlt /> 1234 Builder's Lane, Construct City, ST 56789</p>
          <p><FaPhone /> +1 (123) 456-7890</p>
          <p><FaEnvelope /> contact@abi-construction.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// This Contact component is for displaying contact information and a contact form //
// It can be used to allow users to reach out to the construction company for inquiries or support //
// should be export default Contact;        