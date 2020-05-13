import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
      <Link className="navbar-brand" to="/">
        EU
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
               window.location.pathname === "/about" || window.location.pathname === "/"
                  ? "nav-link active": "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio" 
              ? "nav-link active" 
              : "nav-link"
            }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" 
              ? "nav-link active" 
              : "nav-link"
            }
            >
              Contact
            </Link>
          </li>
          <li className="contact-1">
          <a
              href="mailto:eurbaezjr@gmail.com"
            >
          <FontAwesomeIcon icon={faEnvelope} className="icons"/>
           </a>
          </li>
          <li className="contact-2">
          <a
              href="https://www.linkedin.com/in/eurbaez/"
            >
          <FontAwesomeIcon icon={faLinkedin} className="icons"/>
           </a>
          </li>
          <li className="contact-3">
          <a
              href="https://github.com/eurbaezjr"
            >
          <FontAwesomeIcon icon={faGithub} className="icons"/>
           </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter((Navbar));