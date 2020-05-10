import React, { Component } from "react";
import Hero from "../components/Hero";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"
import MyVerticalTimeline from "../components/MyVerticalTimeline"

class Experience extends Component {

  state = {
    title: "",
    subtitle: "",
    BackgroundImage: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    timeline: ""
  };

  componentDidMount() {
  setTimeout(() => { this.setState({ 
    subtitle: "Web Developer & Data Marketer", 
    title: "Eduardo Urbaez", 
    timeline:<MyVerticalTimeline/> 
  }) }, 1000)}


  render() {
    return (
      <div>
        <Hero backgroundImage={this.state.BackgroundImage}>
          <AvatarIcon/>
          <AnimeHeader>{this.state.title}</AnimeHeader>
          <AnimeSubHeader>{this.state.subtitle}</AnimeSubHeader>
          {this.state.timeline}
        </Hero>
      </div>
    );
  }
}

export default Experience;
