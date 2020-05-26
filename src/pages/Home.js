import React, { Component } from "react";
import Hero from "../components/Hero";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"
import MyVerticalTimeline from "../components/MyVerticalTimeline"
import Container from "../components/Container"
import SectionBox from "../components/SectionBox"

class Home extends Component {

  state = {
    title: "",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",
    BackgroundImage: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    timeline: "",
    about: ""
  };

  componentDidMount() {
  setTimeout(() => { this.setState({ 
    subtitle1: "Full-Stack Web Developer", 
    subtitle2: "&" ,
    subtitle3: "Programmatic Data Marketer",
    title: "Eduardo Urbaez", 
    timeline:<MyVerticalTimeline/>,
    about: <SectionBox header="About Me">
    Driven Full-Stack Web Developer with over four years of programmatic data marketing experience in leadership roles. 
    Effective at combining entrepreneurship, user stories, and agile methodology while collaborating with stakeholders 
    to learn fast and deliver work quickly. Experienced at managing project lifecycles, data-driven strategies, vendor 
    relationships, scoping, and design. Passionate about solving new challenges to promote team and personal growth. </SectionBox>
  }) }, 1000)}

  render() {
    return (
      <div>
        <Hero backgroundImage={this.state.BackgroundImage}>
          <Container>
          <AvatarIcon/>
          <AnimeHeader>{this.state.title}</AnimeHeader>
          <AnimeSubHeader>{this.state.subtitle1}</AnimeSubHeader>
          <AnimeSubHeader>{this.state.subtitle2}</AnimeSubHeader>
          <AnimeSubHeader>{this.state.subtitle3}</AnimeSubHeader>
          {this.state.about}
          <br/>
          <br/>
          {this.state.timeline}
          </Container>
        </Hero>
      </div>
    );
  }
}

export default Home;
