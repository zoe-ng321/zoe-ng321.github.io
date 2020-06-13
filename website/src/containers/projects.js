import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import stellarspine from '../assets/stellarspine.png';
import airthoughts from '../assets/AirThoughts.png';

export default class Projects extends Component {
  render(){
    return(
      <div class="container" id="projects">
        <h1>Projects</h1>
        <div>
          <h3>Stellar Spine</h3>
          <img src={stellarspine} style={{height:500}}/>
          <p>UT ECE Senior Capstone Design Project: Created a real-time scoliosis brace compliance monitor in a team of 6. The system consists of a
            sensor and a mobile application, and it allows users to view compliance data in real-time and receive incentives to wear their brace.
            I primarily worked on the mobile application which is built using React Native. The project received first
            place among the Honors/Entrepreneurial teams.</p>
        </div>
        <div>
          <h3>Air Thoughts</h3>
          <img src={airthoughts} style={{width:750}}/>
          <p>HackTX 2018 Project: Worked on a team of five to create a web application that
            identifies and leverages customer sentiments for American Airlines customers in real time.
            The app displays sentiment analysis of live conversations and parses keywords to understand
            the conversation topic and the sentiment associated with the topic. The project was created
            using React, Material UI, Recharts, Flask, MongoDB, RevSpeech API, and the Microsoft Azure
            Text Analysis API. We placed in the top 10 projects overall and won third place for the American
            Airlines challenge, and we developed the project during the 24-hour hackathon.</p>
            <a href="https://github.com/david-bush/HackTX2018">Github Repository</a>
        </div>
      </div>
    );
  }
}
