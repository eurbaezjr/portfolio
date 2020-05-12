import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css"

function SkillsContainer(props) {
  return (
    <div className="skills-container">
     <Container>
   <Row>
  {props.children}

</Row>          

</Container>
    </div>
  );
}

export default SkillsContainer;
