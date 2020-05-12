import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card" id={props.id}>
      <a href={props.url}>
        <div className="img-container">
          <img className="gifs" alt={props.name} src={props.image} height="250px" width="650px"/>
        </div>
        <div className="content">
        <h3 className="justify-content-center cardHeader">{props.name.toString().replace(/-/g," ")}</h3>
          <h5>Description:</h5> 
          <text className="textalign">{props.description}</text> 
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
