import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import stellarspine from '../assets/stellarspine.png';
import airthoughts from '../assets/AirThoughts.png';
import mastermind from '../assets/Mastermind.png';
import chatprogram from '../assets/ChatProgram.png';


export default class Projects extends Component {
  render(){
    return(
      <div class="container" id="projects">
        <h1>Projects</h1>
        <div>
          <h2>Stellar Spine</h2>
          <img src={stellarspine} style={{height:500}}/>
          <p>UT ECE Senior Capstone Design Project: Created a real-time scoliosis brace compliance monitor in a team of 6. The system consists of a
            sensor and a mobile application, and it allows users to view compliance data in real-time and receive incentives to wear their brace.
            I primarily worked on the mobile application which is built using React Native. The project received first
            place among the Honors/Entrepreneurial teams.</p>
        </div>
        <div>
          <h2>Air Thoughts</h2>
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
        <div>
          <h2>WiFi Piano</h2>
          <iframe width="560" height="300" src="https://www.youtube.com/embed/DqZtjWEB5SY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <p>EE 445L Final Project: Worked with a partner to create an WiFi piano that would allows users to play notes and chords on the piano.
  				Users record the sequence of notes played and send it to a data logging server.
  				I worked on creating the data logging server, the notes, the DAC output, and soldering the components to the PCB.</p>
  				<a href="https://ee445l-floorpiano.appspot.com">Link to Server</a>
        </div>
        <div>
          <h2>UT Bathroom Services</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/q3W-MPyDkqY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>EE 461L Team Project: Worked in a team of 4 to create an Android app that would allows users to find bathrooms and water fountains
  				on the UT campus. Users can filter facilities by factors such as location and cleanliness
  				and can leave reviews. I worked on integrating the app with Google Firebase, setting up
  				Cloud Firestore noSQL database, and the Favorites activity.</p>
          <a href="https://github.com/dChunGit/UT-Bathroom-Services">Github Repository</a>
        </div>
        <div>
          <h2>Mastermind Game</h2>
  				<img src={mastermind} style={{height:500}}/>
  				<p>Created Mastermind game using Java and JavaFX. Built off of text-based Mastermind game written for EE 422C assignment and added JavaFX elements.</p>
          <a href="https://github.com/zoe-ng321/MastermindJar">Github Repository</a>
  			</div>
        <div>
          <h2>Chat Room</h2>
  				<img src={chatprogram} style={{width:1000}}/>
  				<p>EE 422C Partner Project: Used socket programming, multithreading, JavaFX, and the observer design pattern in creating a chat program.
  				The chat program supports 1-1 chat, group chats, and public chats, and works across computers. </p>
  				<p><a href="https://github.com/zoe-ng321/ChatRoomJAR">Github Repository</a></p>
  			</div>
      </div>
    );
  }
}
