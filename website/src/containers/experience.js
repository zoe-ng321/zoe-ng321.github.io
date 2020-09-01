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
import Button from 'react-bootstrap/Button';
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
            I work on the Digital Marketing Experience team which focuses on the digital
            experiences that Visa uses to show content, such as offers and promotions, to consumers.
            </p>
            <p>
            I integrated a Visa API into the Visa Product Portal using Java to allow cardholders to select and view benefits.
            I also implemented a device binding algorithm in the login flow of the Global Marketing Authentication Portal (GMAP)
            to prevent account takeover. I created a customer service tool using Angular and Java to allow admins to find customers’
            account status. I added a dropdown for US states on US GMAP registration page.
            </p>
            <p>
            In addition to development tasks, I receive on-call alerts, research causes of time-to-interactive spikes on our websites,
            and create Splunk alerts and dashboards. Recently, I mentored a team of interns in the 2020 Visa Global Intern Summer Hackathon,
            and they won third place overall and first in the US with their solution to help small businesses promote offers.
            </p>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Java
            </Button>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Angular
            </Button>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="May 2018 - August 2018"
            style={{ color: '#8795FA' , zIndex: 2}}
            dateInnerStyle={{ background: '#8795FA', fontWeight: 'bold'}}>
            <h3>Software Engineering Intern, IBM</h3>
            <h4>Austin, TX</h4>
            <p>
            I interned with the CIO Identity Engineering Services Team in Austin, TX.
            </p>
            <p>
            My project for the summer was to develop a service monitoring dashboard for IBMid using React and Node.js
            that would be used by thousands of IBM employees and customers. I collaborated with another intern to complete the project.
            I designed the current, day, and month views of the dashboard using the IBM design system and created
            component tests for the dashboard using Jest and Enzyme. With this project, I was able to learn React on the job.
            </p>
            <p>
            In addition to my main project, I collaborated with a team of four interns in a two-day hackathon event. We created a
            Internet of Things (IoT) room monitor and web application to show the availability of conference and phone rooms.
            In addition, the intern team and I created an intern portal using Node.js and Express to introduce us to the main team.
            </p>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              React
            </Button>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Node.js
            </Button>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Jest
            </Button>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Enzyme
            </Button>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="June 2017 - August 2017"
            style={{ color: '#6BC3FA' , zIndex: 2}}
            dateInnerStyle={{ background: '#6BC3FA', fontWeight: 'bold'}}>
            <h3>Information Technology Intern, IBM</h3>
            <h4>Austin, TX</h4>
            <p>
            I interned with the CIO Identity Engineering Services Team where I learned and followed daily Agile practices and procedures.
            </p>
            <p>
            My project for the summer was to create a certificate expiration monitor that notifies users of expiring certificates via email.
            The REST API that I created for the monitor allows an existing web application to use the system.
            This project helped to solidify my Java skills.
            </p>
            <p>
            In addition to my main project, I collaborated with a team of five interns in a two-day hackathon event. We created a
            web application that allows users to notify others of snacks on the office floor. Besides the hackathon, I also
            developed automated UI tests using Selenium to test the team's existing web application.
            </p>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Java
            </Button>
            <Button
              variant="outline-secondary"
              disabled={true}
              className='skilltag'
              style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
              Selenium
            </Button>
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
