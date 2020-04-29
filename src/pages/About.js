import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"
import "./style.css";

function About() {

  // github handle for avatar image. 
  
  let gitHubUser = 'eurbaezjr'


  return (
    <div>
      <Hero backgroundImage="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <AvatarIcon handle={gitHubUser} />
        <AnimeHeader>Eduardo Urbaez</AnimeHeader>
        <AnimeSubHeader>Web Developer &amp; Data Marketer</AnimeSubHeader>
      </Hero>
      <Container style={{ marginTop: 30 }}>
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
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
