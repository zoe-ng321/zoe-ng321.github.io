import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {IconContext} from "react-icons";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

export default class Nav extends Component {
  render(){
    return(
        <Navbar className="navbar">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            <button class="navbutton"><Navbar.Brand><h3>Zoe Ng</h3></Navbar.Brand></button>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{marginTop:'6px'}}>
            <button class="navbutton"><h5>Home</h5></button>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{marginTop:'6px', marginLeft: '1%'}}>
            <button class="navbutton"><h5>About</h5></button>
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{marginTop:'6px', marginLeft: '1%'}}>
            <button class="navbutton"><h5>Experience</h5></button>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{marginTop:'6px', marginLeft: '1%'}}>
            <button class="navbutton"><h5>Projects</h5></button>
          </Link>
          <IconContext.Provider value={{ size: 30 }}>
            <a href="https://www.linkedin.com/in/zoe-ng-119ba811b" style={{color:'black', marginLeft: '1%'}}>
              <GrLinkedin/></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: 30 }}>
            <a href="https://github.com/zoe-ng321" style={{color:'black', marginLeft: '1%'}}>
            <div><GrGithub/></div></a>
          </IconContext.Provider>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
