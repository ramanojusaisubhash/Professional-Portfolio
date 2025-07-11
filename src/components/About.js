import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";
import profileImage from "../assets/About_image.jpg"; // Replace with actual image path

function About() {
  return (
    <section id="about" className="py-6 about-section">
      <Container>
        {/* Section Title */}
        <h2 className="text-center section-title">ABOUT ME</h2>

        {/* Box Container for Content */}
        <div className="about-box">
          <Row className="align-items-center flex-column-reverse flex-md-row">
            {/* Right Side (Text) */}
            <Col md={6} className="text-start mt-4 mt-md-0">
              <h4>
                Welcome to <span className="highlight">My Profile</span>
              </h4>
              <p className="intro-text">
                - It's my pleasure to introduce myself.
              </p>
              <p>
                Hello! I'm <span className="bold-text">Subhash from India.</span>{" "}
                I am a passionate fresher in web development. I have basic
                knowledge of modern web technologies and am eager to expand my
                skills.
              </p>
              <p>
                Recently, I completed a small internship at{" "}
                <span className="bold-text">CodeWay Solutions,</span> where I
                worked on front-end and back-end development. This experience
                helped me understand real-world applications of coding and web
                development.
              </p>
              <p>
                Though I am at the beginning of my journey, I am motivated to
                learn and build user-friendly applications. I actively work on
                projects to enhance my skills and stay updated with industry
                trends.
              </p>

              <h5 className="mt-3">What are my values?</h5>
              <p>
                I believe in continuous learning and problem-solving. My goal is
                to build efficient, user-friendly web applications while
                understanding business needs. I embrace challenges to improve my
                technical expertise.
              </p>

              {/* Updated Contact Details */}
              <p>
                <strong>Phone:</strong> +91 7793977797 <br />
                <strong>Email:</strong> ramanojusaisubhash@gmail.com <br />
                <strong>LinkedIn:</strong> Ramanoju Sai Subhash
              </p>

              {/* CV Download Button */}
              <a href="/Sai_Subhash_Resume_.pdf" target="_blank" >
                <Button variant="danger" className="cv-btn">
                  View CV
                </Button>
              </a>

            </Col>

            {/* Left Side (Image) */}
            <Col md={6} className="text-center">
              <img src={profileImage} alt="Profile" className="profile-img" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
