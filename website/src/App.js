import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Content from './containers/content.js';
import NavBar from './containers/navbar.js';


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
