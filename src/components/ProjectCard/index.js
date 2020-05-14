import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card" id={props.id}>
      <a href={props.url}>
        <div className="content">
        <h3 className="justify-content-center cardHeader">{props.name.toString().replace(/-/g," ").charAt(0).toUpperCase() + props.name.toString().replace(/-/g," ").slice(1)}</h3>
          <h5 id="description">Description:</h5> 
          <text className="textalign">{props.description}</text> 
          <div className="img-container" height="300px" width="50%">
          <img className="gifs" alt={props.name} src={props.image} height="300px" width="50%"/>
        </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
