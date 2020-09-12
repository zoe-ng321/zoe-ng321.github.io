import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Content from './containers/content.js';
import NavBar from './containers/navbar.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default class App extends Component {
  render(){
    return(
      <div class="App">
        <NavBar/>
        <Content/>
      </div>
    );
  }
}
