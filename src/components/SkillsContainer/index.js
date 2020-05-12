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
          
          {props.skills.map(result => (
          <Col size="sm-2">
          <button onClick={result.onClick} name={result.skill} id={result.id} className="skill-card" key={result.id}> {result.skill}</button>
          </Col> 
              ))}

</Row>          

</Container>
    </div>
  );
}

export default SkillsContainer;
