import React, { useState } from "react";
import project1 from "../assets/project1-1.png";
import project1_2 from "../assets/project1-2.png";
import project1_3 from "../assets/project1-3.png";
import project2_1 from "../assets/project2-1.png";
import project2_2 from "../assets/project2-2.png";
import project2_3 from "../assets/project2-3.png";
import project3_1 from "../assets/project3-1.png";
import project3_2 from "../assets/project3-2.png";  
import project3_3 from "../assets/project3-3.png";
import project3_4 from "../assets/project3-4.png";
import project4_1 from "../assets/project4-1.png";
import project4_2 from "../assets/project4-2.png";
import project4_3 from "../assets/project4-3.png";
import project5_1 from "../assets/project5-1.png";
import project5_2 from "../assets/project5-2.png";
import project5_3 from "../assets/project5-3.png";
import project5_4 from "../assets/project5-4.png";

import { Container, Row, Col, Card, Modal,  Carousel } from "react-bootstrap";

import "./project.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      "title": "CRUD Application",
      description: "A full-stack CRUD application with React.js, Node.js, and MongoDB, enabling users to perform Create, Read, Update, and Delete operations.",
      images: [project2_1, project2_2, project2_3], // Replace with actual image URLs
      details: "A full-stack web application that allows users to manage data efficiently with CRUD functionalities. Built using React.js for the frontend, Node.js and Express for the backend, and MongoDB Atlas for data storage. The backend is deployed on Render.",
      technologies: "React.js, Node.js, Express.js, MongoDB Atlas",
      url: "https://main-crud-app.onrender.com"
    },
    {
      "id": 2,
      "title": "Professional Portfolio Website",
      "description": "A personal portfolio website built using React to showcase my professional career, skills, projects, and contact details.",
      "images": [project5_1,project5_2,project5_3,project5_4], // Replace with actual image URLs
      "details": "The portfolio includes Home, About, Skills, Projects, and Contact sections, each built as a React component. It features an animated introduction, smooth scrolling, and a clean layout. The About section shares my background, Skills highlights my expertise, Projects showcases my work, and Contact provides ways to reach me.",
      "technologies": "React, Bootstrap, CSS, JavaScript",
      "url": "No URL!" // Replace with actual deployment URL if available
    },
    {
      id: 3,
      title: "E-commers Indian Jewelry Emporium",
      description: "A sleek, responsive Indian jewelry showcase built with HTML, CSS, and Bootstrap, featuring an elegant UI and interactive product display.",
      images: [project1, project1_2, project1_3], // Multiple images
      details:
        "A beautifully designed frontend website showcasing an exquisite collection of Indian jewelry. Built using HTML, CSS, and Bootstrap, the website features a responsive layout, elegant UI, and an interactive product display.",
      technologies: " HTML5, CSS3,Bootstrap",
      url: "No URL!",
    }
    ,
    {
      "id": 4,
      "title": "JavaScript Quiz App",
      "description": "An interactive quiz application built using JavaScript, HTML, and CSS, where users answer 5 questions and receive points for correct answers.",
      "images": [project3_1, project3_2,project3_3,project3_4], // Replace with actual image URLs
      "details": "A simple web-based quiz that presents 5 multiple-choice questions. Users select answers, earn 1 point for each correct response, and see their final score at the end. The app ensures smooth question transitions and a user-friendly interface.",
      "technologies": "JavaScript, HTML, CSS",
      "url": "No URL!" // Replace with actual deployment URL if available
    }
    ,
    {
      "id": 5,
      "title": "Personal Portfolio Landing Page",
      "description": "A professional landing page showcasing my role, photography work, personal details, and contact information.",
      "images": [project4_1, project4_2,project4_3], // Replace with actual image URLs
      "details": "The landing page introduces my role and expertise, displays a photography showcase, provides a short bio about myself, and includes a contact section for easy communication. The page is fully responsive with smooth scrolling and theme toggle functionality.",
      "technologies": "React.js, Bootstrap, CSS",
      "url": "No URL!" // Replace with actual deployment URL if available
    }
    
,    
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="projects" >
      <Container>
        <h2 className="text-center">My Projects</h2>
        <div className="underline"></div>
        <Row className="mt-4 curser-pointer">
          {projects.map((project) => (
            <Col key={project.id} md={6} className="mb-4">
              <Card className="project-card" onClick={() => handleShow(project)}>
                <Card.Img variant="top" src={project.images[0]}  />
                <div className="project-overlay py-2 px-2" >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                {/* Left: Image Slider */}
                <Col md={6}>
                  <Carousel>
                    {selectedProject.images.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img className="d-block w-100" src={img} alt={`Slide ${index}`} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>

                {/* Right: Project Details */}
                <Col md={6}>
                  <h5><strong>Project Info:</strong></h5>
                  <p>{selectedProject.details}</p>

                  <h6><strong>Project Details:</strong></h6>
                  <p><strong>Technologies:</strong> {selectedProject.technologies}</p>
                  <p>
                    <strong>URL:</strong> <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a>
                  </p>

                  {/* Social Share Icons */}
                  <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="mailto:someone@example.com">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>

                </Col>
              </Row>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
}
export default Projects;