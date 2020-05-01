import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"
import MyVerticalTimeline from "../components/MyVerticalTimeline"
import { render } from "react-dom";

class Experience extends Component {

  state = {
    gitHubUser: "eurbaezjr",
    title: "",
    subtitle: "",
    image: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    timeline: ""
  };

  // // function to handle time delays between elements  
  // handleTimeOut = (el, time) => { 
  //   setTimeout( () => {return el}, time)
  //   };

  // When the component mounts, start title animation after X seconds
  // componentDidMount() {
  //  this.setTimeout( () => {this.setState({title:"Eduardo Urbaez"})}, 500)
  // }

  componentDidMount() {
  setTimeout(() => { this.setState({ subtitle: "Web Developer & Data Marketer" , title: "Eduardo Urbaez", timeline:<MyVerticalTimeline/> }) }, 1000)}
      // .then(() => {
      //   Promise.resolve(setTimeout(() => { this.setState({ subtitle: "Web Developer & Data Marketer" }) }, 1500))
      // }).then(() => {
      //   Promise.resolve(setTimeout(() => { this.setState({ timeline: <MyVerticalTimeline /> }) }, 2000))
      // })
  //  let subtitle = setTimeout( () => {return "Web Developer & Data Marketer"}, 1000)
  //  let timeline = setTimeout( () => {return <MyVerticalTimeline />}, 1500)

  render() {
    return (
      <div>
        <Hero backgroundImage={this.state.image}>
          <AvatarIcon handle={this.state.gitHubUser} />
          <AnimeHeader>{this.state.title}</AnimeHeader>
          <AnimeSubHeader>{this.state.subtitle}</AnimeSubHeader>
          {this.state.timeline}
        </Hero>
      </div>
    );
  }
}

export default Experience;
