import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css"

function SkillsContainer(props) {
  return (
    <div>
    <div className="skills-container container">
   <div className="row">
  {props.children}

</div>          
    </div>
    </div>
  );
}

export default SkillsContainer;
