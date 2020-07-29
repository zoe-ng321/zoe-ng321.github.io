import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import About from './about.js';
import Projects from './projects.js';

export default class Content extends Component {
  render(){
    const scrollTop = () =>{
     window.scrollTo({top: 0, behavior: 'smooth'});
    };
    return(
      <div class="content">
        <Home/>
        <About/>
        <Projects/>
      </div>
    );
  }
}
