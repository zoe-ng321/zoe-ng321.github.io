import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {IconContext} from "react-icons";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.state={
      navExpanded: false
    }
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  };

  closeNav() {
    this.setState({ navExpanded: false });
  };

  render(){
    return(
        <Navbar onToggle={this.setNavExpanded} expanded={this.state.navExpanded} className="navbar" expand="lg">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            <button class="navtitle"><Navbar.Brand><h3>Zoe Ng</h3></Navbar.Brand></button>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor: 'lightskyblue', marginBottom: '10px'}}>
            <Nav className="mr-auto">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{marginTop:'6px'}}>
                <button class="navbutton" onClick={this.closeNav}><h5>Home</h5></button>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                style={{marginTop:'6px', marginLeft: '1%'}}>
                <button class="navbutton" onClick={this.closeNav}><h5>About</h5></button>
              </Link>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{marginTop:'6px', marginLeft: '1%'}}>
                <button class="navbutton" onClick={this.closeNav}><h5>Experience</h5></button>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{marginTop:'6px', marginLeft: '1%'}}>
                <button class="navbutton" onClick={this.closeNav}><h5>Projects</h5></button>
              </Link>
            </Nav>
            <Nav>
              <IconContext.Provider value={{ size: 30 }}>
                <a href="https://www.linkedin.com/in/zoe-ng-119ba811b" style={{color:'black', marginLeft: '10px', marginTop:'15px'}}>
                  <GrLinkedin/></a>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: 30 }}>
                <a href="https://github.com/zoe-ng321" style={{color:'black', marginLeft: '10px',marginTop:'15px', paddingBottom:'10px'}}>
                <div><GrGithub/></div></a>
              </IconContext.Provider>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
