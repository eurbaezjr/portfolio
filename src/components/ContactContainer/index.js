import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function ContactContainer(props) {
  return (
    <div className="contact-contain container">
     <div className="contact-children">
  {props.children}
    </div>
    </div>
  );
}

export default ContactContainer;
