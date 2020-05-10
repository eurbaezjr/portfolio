import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card" id={props.id}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}

          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Github Repository:</strong> <a href={props.url}> Click Here</a>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
