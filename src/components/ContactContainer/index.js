import React from "react";
import "./style.css";

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
