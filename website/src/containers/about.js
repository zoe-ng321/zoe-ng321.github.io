import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import profile from '../assets/DSC_0174.jpg';
import {BsChevronCompactDown} from "react-icons/bs";
import {IconContext} from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default class About extends Component {
  render(){
    return(
      <div class="container" id="about">
      <h1>About Me</h1>
      <img class="profile" src={profile} alt="Profile"></img>
      <p>My name is Zoe Ng, and I graduated from the University of Texas of Austin with a degree in Electrical and Computer Engineering!
      My technical core was software engineering.</p>
      <p>
				When I am not coding, I enjoy cooking and watching TV. I also enjoy listening to music, attending concerts, and bouldering.
			</p>
			<p>
				<a href="https://www.linkedin.com/in/zoe-ng-119ba811b/">View my LinkedIn profile</a> or <a href="https://github.com/zoe-ng321">view my Github profile</a>!
			</p>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <IconContext.Provider value={{ size:40 }}><div><BsChevronCompactDown/></div></IconContext.Provider>
      </Link>
      </div>
    );
  }
}
