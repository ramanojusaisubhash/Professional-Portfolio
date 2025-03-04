import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaUsers } from "react-icons/fa";


 // Import Social Icons
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const currentCount = localStorage.getItem("visitCount");

    if (currentCount) {
      const newCount = parseInt(currentCount) + 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount);
    } else {
      setVisitCount(1);
      localStorage.setItem("visitCount", 1);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const serviceID = "service_98f0o4g"; // Replace with your EmailJS Service ID
      const templateID = "template_rfrvz3k"; // Replace with your EmailJS Template ID
      const publicKey = "hBAXS9ESDIiocS_H-"; // Replace with your EmailJS Public Key

      emailjs
        .send(serviceID, templateID, formData, publicKey)
        .then(() => {
          setIsSent(true);
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Get in touch</h2>
        <div className="underline"></div>
        <Row>
          {/* Left Side - Contact Info */}
          <Col md={5} className="contact-info">
            <div className="info-item">
              <FaPhone className="contact-icon" />
              <div>
                <h5>Phone</h5>
                <p>+91 7793977797</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h5>Email address</h5>
                <p>ramanojusaisubhash@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h5>Location</h5>
                <p>Rajahmundry , India</p>
              </div>
            </div>
          </Col>

          {/* Right Side - Contact Form */}
          <Col md={7}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <small className="error-text">{errors.name}</small>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small className="error-text">{errors.email}</small>}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="subject">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <small className="error-text">{errors.subject}</small>}
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <small className="error-text">{errors.message}</small>}
              </Form.Group>

              <Button type="submit" className="send-btn">
                <FaPaperPlane className="send-icon" /> {isSent ? "Message Sent!" : "Send Message"}
              </Button>
            </Form>
          </Col>
        </Row>
        <div style={{display: "flex" , justifyContent: "enter", alignItems: "baseline"}}>
        {/* Visitor Counter*/}
        <Row className="visitor-counter-container">
          <Col>
            <div className="visitor-counter">
              <FaUsers className="visitor-icon" />
              <span>{visitCount} times Visited</span>
            </div>
          </Col>
        </Row>

        {/* Social Media Icons */}
        <Row className="social-icons-container pt-5">
          <Col>
            <a href="https://github.com/ramanojusaisubhash" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/ramanojusaisubhash" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sai.subhash.52?utm_source=qr&igsh=cXVwdmFhMjVybmNx" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram />
            </a>
            
            <a href="https://www.facebook.com/share/15xnTipx1d/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <FaFacebook />
            </a>
            
          </Col>
        </Row>
        </div>

      </Container>
    </section>
  );
}

export default Contact;
