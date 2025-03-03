import React from "react";
import { Carousel } from "react-bootstrap";
import images1 from "../assets/Screenshot 2025-03-03 203322.png";
import images2 from "../assets/Screenshot 2025-03-03 203345.png";
import image3 from "../assets/Screenshot 2025-03-03 203410.png";
import image4 from "../assets/Screenshot 2025-03-03 203501.png";
import image6 from "../assets/Screenshot 2025-03-03 214631.png";
import image5 from "../assets/CSM-Ramanoju Sai Subhash.png";
import "./Certificates.css";

const certificates = [
  { id: 1, title: "REST API workshop", img: image5 },
  { id: 6, title: "Web Development Internship certificate", img: image6 },
  { id: 2, title: "Java Programming Certification", img: images2 },
  { id: 3, title: "Programming, Data Structures, and Algorithms using Python", img: images1 },
  { id: 4, title: "AI ML virtual internship", img: image3 },
  { id: 5, title: "Image Processing with OPEN CV", img: image4 },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="underline"></div>

      <div className="certificates-carousel">
        <Carousel 
          interval={2000}  // Auto-scroll every 3 seconds
          wrap={true} 
          indicators={true} 
          nextIcon={<span className="carousel-control-next-icon custom-arrow" />} 
          prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
        >
          {certificates.map((certificate) => (
            <Carousel.Item key={certificate.id}>
              <div className="certificate-card">
                <img className="certificate-img" src={certificate.img} alt={certificate.title} />
                <p className="certificate-title">{certificate.title}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Certificates;
