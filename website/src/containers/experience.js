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
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


export default class Experience extends Component {
  render(){
    return(
      <div class="container" id="experience">
      <h1>Experience</h1>
      <Row>
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="June 2019 – Present"
            style={{ color: '#FA8795' , zIndex: 2}}
            dateInnerStyle={{ background: '#FA8795', fontWeight: 'bold'}}>
            <h3>Software Engineer, Visa</h3>
            <h4>Austin, TX</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="May 2018 - August 2018"
            style={{ color: '#8795FA' , zIndex: 2}}
            dateInnerStyle={{ background: '#8795FA', fontWeight: 'bold'}}>
            <h3>Software Engineering Intern, IBM</h3>
            <h4>Austin, TX</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="June 2017 - August 2017"
            style={{ color: '#6BC3FA' , zIndex: 2}}
            dateInnerStyle={{ background: '#6BC3FA', fontWeight: 'bold'}}>
            <h3>Information Technology Intern, IBM</h3>
            <h4>Austin, TX</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
        </Timeline>
      </Row>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <IconContext.Provider value={{ size: 40 }}><div style={{marginBottom: 30}}><BsChevronCompactDown/></div></IconContext.Provider>
      </Link>
      </div>
    );
  }
}
