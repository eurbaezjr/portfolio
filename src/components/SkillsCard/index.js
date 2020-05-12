import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css"

function SkillsContainer(props) {
  return (
  <div className="col-sm-3 col-xm-3 col-lg-3 col-xl-2">
          <button onClick={props.onClick} name={props.name} id={props.id} className="skill-card" key={props.id}> {props.name}</button>

  </div>
  );
}

export default SkillsContainer;
