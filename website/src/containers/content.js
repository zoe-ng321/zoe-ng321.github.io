import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import About from './about.js';
import Projects from './projects.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Experience from './experience.js';

export default class Content extends Component {
  render(){
    const scrollTop = () =>{
     window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return(
      <Container>
        <Col>
          <div class="content">
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
          </div>
        </Col>
      </Container>

    );
  }
}
