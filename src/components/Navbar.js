import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/LOGO-removebg-preview.png"; // Importing logo
import "./Navbar.css";

function CustomNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section must be visible to activate
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolling ? "scrolled" : ""}`} fixed="top">
      <Container>
        {/* Logo added instead of text */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeSection === "home" ? "active" : ""}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeSection === "about" ? "active" : ""}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</Nav.Link>
            <Nav.Link href="#certificates" className={activeSection === "certificates" ? "active" : ""}>Certificates</Nav.Link>
            <Nav.Link href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
