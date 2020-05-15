import React from 'react';
import Row from "../components/Row";
import Hero from "../components/Hero";
import AvatarIcon from "../components/AvatarIcon"
import Col from "../components/Col";
import ContactContainer from "../components/ContactContainer"
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class Contact extends React.Component {

  render() {
    return (

      <div>
        <Hero backgroundImage="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
          <AvatarIcon />
          <Container>
            <ContactContainer>
              <Row>
                <Col size="12">
                <div className="contactMe">
                <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                <a href="mailto:eurbaezjr@gmail.com" text-decoration="none" style={{color:"white"}} target="_blank" rel="noopener noreferrer"> eurbaezjr@gmail.com </a>
                </div>  
                </Col>
              </Row>
              <Row> 
                <Col size="12">
                <div className="contactMe">
                <FontAwesomeIcon icon={faLinkedin} className="icons"/>
                <a href="https://www.linkedin.com/in/eurbaez/" text-decoration="none" style={{color:"white"}} target="_blank" rel="noopener noreferrer"> www.linkedin.com/in/eurbaez/ </a>
                </div>  
                </Col>
              </Row>
              <Row> 
                <Col size="12">
                <div className="contactMe">
                <FontAwesomeIcon icon={faGithub} className="icons"/>
                <a href="https://github.com/eurbaezjr" text-decoration="none" style={{color:"white"}} target="_blank" rel="noopener noreferrer"> www.github.com/eurbaezjr </a>
                </div> 
                </Col>
              </Row>
            </ContactContainer>
          </Container>
        </Hero>
      </div>
    )
  }
}


export default Contact