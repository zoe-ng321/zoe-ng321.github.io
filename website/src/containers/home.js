import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {BsChevronCompactDown} from "react-icons/bs";
import {IconContext} from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Home extends Component {
  render(){
    return(
      <div class="container home" id="home">
        <h1>Hi! My name is Zoe!</h1>
        <Link
          activeClass="active"
          to="about"
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
