import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css"

function SkillsContainer(props) {
  return (
    <div>
    <div className="skills-container">
     <Container>
     <h1 id="quick-search">Quick Search Scroller</h1>
   <Row>
  {props.children}

</Row>          

</Container>
    </div>
    </div>
  );
}

export default SkillsContainer;
