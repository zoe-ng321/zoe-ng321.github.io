import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {BsChevronCompactDown} from "react-icons/bs";
import {IconContext} from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import Typing from 'react-typing-animation';

export default class Home extends Component {
  render(){
    return(
      <div class="container home" id="home">
        <Typing speed={60}>
          <h1 style={{fontSize: 75, color:'DARKSLATEBLUE'}}>Hi! My name is Zoe!</h1>
        </Typing>
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
