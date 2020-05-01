import React, { Component } from "react";
import MyHorizontalTimeline from "../components/MyHorizontalTimeline"
import { render } from "react-dom";
import API from "../utils/API"

class Portfolio extends Component {

  render() {  
 
  return (
    <div>
      <MyHorizontalTimeline/>
    </div>
  );
}
}

export default Portfolio;
