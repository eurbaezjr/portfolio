import React from "react";
import "./style.css";

function SectionBox(props) {
  return (
    <div className="section" id={props.id}>
    
        <div className="sectionContent">
        <h3 className="justify-content-center sectionHeader">{props.header}</h3>
          <text>{props.children}</text>   
        </div>
        <br/>
        </div>
  );
}

export default SectionBox;
