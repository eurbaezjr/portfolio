import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import AnimeHeader from "../components/AnimeHeader"
import AnimeSubHeader from "../components/AnimeSubHeader"
import AvatarIcon from "../components/AvatarIcon"
import MyVerticalTimeline from "../components/MyVerticalTimeline"

function Experience() {

  let gitHubUser = 'eurbaezjr'

  return (
    <div>
      <Hero backgroundImage="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <AvatarIcon handle={gitHubUser} />
        <AnimeHeader>Eduardo Urbaez</AnimeHeader>
        <AnimeSubHeader>Web Developer &amp; Data Marketer</AnimeSubHeader>
        <MyVerticalTimeline/>
      </Hero>
    </div>
  );
}

export default Experience;
