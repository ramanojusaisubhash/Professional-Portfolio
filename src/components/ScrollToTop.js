import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaLinkedin, FaShareAlt, FaGithub } from "react-icons/fa"; // ✅ social icons
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false); // ✅ for feedback message

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    // ✅ Copy current page link


    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // hide after 2s
    });
  };

  return (
    <div className={`scroll-to-top-container ${isVisible ? "show" : "hide"}`}>
      {/* Social Buttons - hidden until hover */}
      <a
        href="https://www.linkedin.com/in/ramanojusaisubhash"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
      >

        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ramanojusaisubhash"   // <-- replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn github"
      >
        <FaGithub />
      </a>

      <button className="social-btn share" onClick={handleShare}>
        <FaShareAlt />
      </button>
      {copied && <span className="copy-msg">Link copied!</span>}

      {/* Scroll to Top Button */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
