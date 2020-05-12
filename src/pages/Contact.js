import React from 'react';
import Row from "../components/Row";
import Hero from "../components/Hero";
import AvatarIcon from "../components/AvatarIcon"
import Col from "../components/Col";
import ContactContainer from "../components/SkillsContainer"
import Container from '../components/Container';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      BackgroundImage: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  }

  render() {
    return (

      <div>
        <Hero backgroundImage={this.state.BackgroundImage}>
        <AvatarIcon/>
        <Container>
              <ContactContainer>
              <Row>Email: <a>eurbaezjr@gmail.com</a></Row>
              <Row>Email: <a>eurbaezjr@gmail.com</a></Row>
              <Row>Email: <a>eurbaezjr@gmail.com</a></Row>
              <Row>Email: <a>eurbaezjr@gmail.com</a></Row>
              </ContactContainer>
          </Container>    
        </Hero>
      </div>
    )
  }
}


export default Contact