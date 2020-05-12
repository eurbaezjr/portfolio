import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css"

function ContactContainer(props) {
  return (
    <div className="contact-container">
     <Container>
     <h1 id="contact-header">Contact</h1>
     <div className="contact-children">
<Row>
  <Col size="12">
  {props.children}
  </Col>
</Row>
  </div>
</Container>
    </div >
  );
}

export default ContactContainer;
