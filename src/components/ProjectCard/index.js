import React from "react";
import "./style.css";
import { checkPropTypes } from "prop-types";

function ProjectCard(props) {
  return (
    <div className="card" id={props.id}>
      <a href={props.url}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      </a>
    </div>
  );
}

export default ProjectCard;
