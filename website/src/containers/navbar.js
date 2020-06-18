import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import {IconContext} from "react-icons";
import { GrGithub, GrLinkedin } from "react-icons/gr";


export default class NavBar extends Component {
  render(){
    function scroll(value){
      window.scrollTo(value, 0);
    }

    return(
      <div class="navbar">
      <h1>Zoe Ng</h1>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <h2>Home</h2>
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <h2>About</h2>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <h2>Projects</h2>
      </Link>
      <IconContext.Provider value={{ size:40, style:{marginBottom: 10}}}><a href="https://www.linkedin.com/in/zoe-ng-119ba811b" style={{color:'black'}}><GrLinkedin/></a></IconContext.Provider>
      <IconContext.Provider value={{ size:40 }}><a href="https://github.com/zoe-ng321" style={{color:'black'}}><div><GrGithub/></div></a></IconContext.Provider>
      </div>
    );
  }
}
