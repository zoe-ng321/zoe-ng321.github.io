import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/Github.png";

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
      <div style={{position:"fixed", left: "4%", display:"flex",flexDirection:"row"}}>
        <a href="https://www.linkedin.com/in/zoe-ng-119ba811b"><img style={{paddingRight: 30}}src={linkedin}/></a>
        <a href="https://github.com/zoe-ng321"><img src={github}/></a>
      </div>
      </div>
    );
  }
}
