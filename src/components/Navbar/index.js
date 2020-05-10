import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { withRouter } from 'react-router-dom';

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
              to="/experience"
              className={
               window.location.pathname === "/experience" || window.location.pathname === "/"
                  ? "nav-link active": "nav-link"
              }
            >
              Experience
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
        </ul>
      </div>
    </nav>
  );
}

export default withRouter((Navbar));