import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import profile from '../assets/DSC_0174.jpg';
import {BsChevronCompactDown} from "react-icons/bs";
import {IconContext} from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


export default class About extends Component {
  render(){
    return(
      <div class="container about" id="about">
      <Row>
        <Col md={4}>
        <Image src={profile} rounded />
        </Col>
        <Col>
          <h1>About Me</h1>
          <br/>
          <div>
            <p>My name is Zoe Ng, and I am currently a Software Engineer at Visa with a focus on full stack web development.
            I graduated from the University of Texas of Austin with a degree in Electrical and Computer Engineering!
            </p>
            <p>
  				      When I am not coding, I enjoy cooking and experimenting with new recipes. I also attending concerts, bouldering, and traveling
                to try out new foods!
  			    </p>
      			<p>
      				<a href="https://www.linkedin.com/in/zoe-ng-119ba811b/">View my LinkedIn profile</a> or
               <a href="https://github.com/zoe-ng321"> view my Github profile</a>!
      			</p>
          </div>
        </Col>
      </Row>
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <IconContext.Provider value={{ size: 40 }}><div><BsChevronCompactDown/></div></IconContext.Provider>
      </Link>
      </div>
    );
  }
}
