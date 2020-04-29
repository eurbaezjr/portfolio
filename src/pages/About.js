import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"

function About() {

          /* <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio Page.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I am a driven, creative and bilingual developer with leadership experience in the field of data-driven programmatic advertising.
              Currently seeking product leadership roles with a focus on automation, algorithms, and efficiency solutions.
              Proven ability to research, market, and manage multiple types of projects for local and international clients.
              My main aspiration is to mix my experience in data, marketing, design, and coding into synergetic solution on behalf of your organization.
            </p>
          </Col>
        </Row>
      </Container> */


  // github handle for avatar image. 
  let gitHubUser = 'eurbaezjr'

  return (
    <div>
      <Hero backgroundImage="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <AvatarIcon handle={gitHubUser} />
        <AnimeHeader>Eduardo Urbaez</AnimeHeader>
        <AnimeSubHeader>Web Developer &amp; Data Marketer</AnimeSubHeader>
      </Hero>
    </div>
  );
}

export default About;
