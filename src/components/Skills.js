import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si"; // MongoDB icon

const skillsData = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "React.js", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "MongoDB", level: "65%" },
  { name: "Bootstrap", level: "85%" },
];

const skillIcons = [
  { icon: <FaHtml5 className="skill-icon html" />, name: "HTML5" },
  { icon: <FaCss3Alt className="skill-icon css" />, name: "CSS3" },
  { icon: <FaJs className="skill-icon js" />, name: "JavaScript" },
  { icon: <FaReact className="skill-icon react" />, name: "React.js" },
  { icon: <FaNodeJs className="skill-icon node" />, name: "Node.js" },
  { icon: <SiMongodb className="skill-icon mongo" />, name: "MongoDB" },
  { icon: <FaBootstrap className="skill-icon bootstrap" />, name: "Bootstrap" },
];

function Skills() {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Stops observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2 className="section-title">My Skills</h2>
      <div className="underline"></div>
      <p className="section-description">
        Here are some of the technologies I have experience with:
      </p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`skill-container ${animate ? "animated" : ""}`}
            style={{ "--progress-width": skill.level }}
          >
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: animate ? skill.level : "0%" }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skill Icons */}
      <div className="skills-icon-container">
        {skillIcons.map((skill, index) => (
          <div key={index} className="skill-icon-box">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
