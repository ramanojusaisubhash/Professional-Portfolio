import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion"; 
import "./Qualification.css";

function Qualification() {
  const [isWork, setIsWork] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  // ✅ Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const newScrollY = window.scrollY;
      if (newScrollY > lastScrollY) {
        setScrollDir("down");
      } else if (newScrollY < lastScrollY) {
        setScrollDir("up");
      }
      lastScrollY = newScrollY;
    };
    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const educationData = [
    {
      title: "Schooling",
      subtitle: "Sri Harshavadana E.M high School, 2020",
      description: "Completed primary and secondary education."
    },
    {
      title: "Intermediate",
      subtitle: "Narayana Junior College, 2022",
      description: "Specialized in MPC (Maths, Physics, Chemistry)."
    },
    {
      title: "Under Graduation",
      subtitle: "Sasi Institute of Technology and Engineering, 2026",
      description: "Bachelor's in Computer Science and Engineering-AIML."
    }
  ];

  const workData = [
    {
      title: "Internship",
      subtitle: "CodeWay Solutions, 2024",
      description: "Worked on frontend development using React.js."
    },
    {
      title: "Mini Project",
      subtitle: "Personal Portfolio Website",
      description: "Built with React.js and Node.js."
    },
    {
      title: "Future Work",
      subtitle: "Open for Opportunities",
      description: "Looking forward to applying skills in innovative projects."
    }
  ];

  const dataToRender = isWork ? workData : educationData;

  // ✅ Animation Variants (scroll direction + stagger)
  const fadeInVariant = {
    hidden: ({ dir }) => ({
      opacity: 0,
      y: dir === "down" ? 50 : -50, // 👈 scroll down → bottom-to-top, scroll up → top-to-bottom
    }),
    visible: ({ i }) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3, // stagger row by row
      },
    }),
  };

  return (
    <section id="qualification" className="py-5 bg-white text-dark">
      <Container>
        <h2 className="text-center fw-bold mt-3">Qualification</h2>
        <div className="underline"></div>
        <p className="text-center text-secondary mb-4">
          Walk Through My Personal Journey – Exploring My Qualifications, Work & Experience
        </p>

        {/* Toggle Switch */}
        <div className="d-flex justify-content-center align-items-center mb-5">
          <span className={`me-2 fw-bold ${!isWork ? "text-danger" : "text-secondary"}`}>
            Education
          </span>
          <Form.Check
            type="switch"
            id="view-switch"
            checked={isWork}
            onChange={() => setIsWork(!isWork)}
          />
          <span className={`ms-2 fw-bold ${isWork ? "text-danger" : "text-secondary"}`}>
            Work
          </span>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {dataToRender.map((item, index) => (
            <motion.div
              key={`${isWork}-${index}`}
              className="timeline-item"
              custom={{ dir: scrollDir, i: index }} // ✅ pass scrollDir + index
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // re-trigger on scroll
              variants={fadeInVariant}
            >
              <Row className="w-100">
                {/* Left Column */}
                <Col md={5} className="timeline-left text-end">
                  {index % 2 !== 0 && (
                    <div className="timeline-content">
                      <h5 className="text-danger fw-bold">{item.title}</h5>
                      <small className="text-secondary d-block">{item.subtitle}</small>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  )}
                </Col>

                {/* Center Column */}
                <Col
                  md={2}
                  className="timeline-center d-flex flex-column align-items-center position-relative"
                >
                  <div className="timeline-dot"></div>
                  {index !== dataToRender.length - 1 && <div className="timeline-line"></div>}
                </Col>

                {/* Right Column */}
                <Col md={5} className="timeline-right text-start">
                  {index % 2 === 0 && (
                    <div className="timeline-content">
                      <h5 className="text-danger fw-bold">{item.title}</h5>
                      <small className="text-secondary d-block">{item.subtitle}</small>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  )}
                </Col>
              </Row>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Qualification;
