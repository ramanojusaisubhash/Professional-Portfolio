import React from "react";
import { Container, Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import background from "../assets/wide_b&w-image2.jpg";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section" style={{ backgroundImage: `url(${background})` }}>
      <Container className="text-center home-content">
        <h1 className="title name"> SAI SUBHASH</h1>
        <h5 className="subtitle">
          I'm a web designer and front-end developer with a passion for learning.I help your business and individuals by developing websites.{" "}
          <span className="typed-text">
            <ReactTyped
              strings={[
                "Frontend developer",
                "Backend developer",
                "MERN stack developer",
                "UI / UX Designer"
              ]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </span>
        </h5>
        <Button href="#contact" variant="danger" className="contact-btn">
          Get in Touch
        </Button>
      </Container>
    </section>
  );
}

export default Home;
