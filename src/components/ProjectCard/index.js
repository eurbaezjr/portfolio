import React from "react";
import "./style.css";

function ProjectCard(props) {

var website;  

if (!props.website) {
website = ""
}
else {
website = <a id="deployed" href={props.website} target="_blank" rel="noopener noreferrer">| Click HERE to View Deployed Application</a>;
};

  return (
    <div className="card" id={props.id}>
    
        <div className="content">
        <h3 className="justify-content-center cardHeader">{props.name.toString().replace(/-/g," ").replace("and"," and ").toUpperCase()}</h3>
          <h5 className="description">Description:</h5>
  <text className="projectTest">{props.description}</text>
          <a className="clickImage" href={props.url} target="_blank" rel="noopener noreferrer" text-decoration="none" style={{color:"black"}} > Click Image To Review Code on Github {website}
          <div className="img-container" height="300px" width="50%">
          <img className="gifs" alt={props.name} src={props.image} height="300px" width="50%"/>
          
        </div>
        </a>
        <br/>

        </div>
    </div>
  );
}

export default ProjectCard;
